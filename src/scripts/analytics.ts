/**
 * Centralized Google Analytics 4 Event Tracking Utility
 *
 * This module provides type-safe functions for tracking conversions and user interactions
 * across the Minimal.lat website.
 */

// Type definitions for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Event parameter interfaces for type safety
 */
interface BaseEventParams {
  page_path?: string;
  page_location?: string;
  page_title?: string;
}

interface CTAClickParams extends BaseEventParams {
  button_text: string;
  button_location: string;
  cta_type?: 'primary' | 'secondary' | 'navigation';
  destination_url?: string;
}

interface FormSubmitParams extends BaseEventParams {
  form_name: string;
  form_location: string;
  email_domain?: string;
  url_entered?: string;
}

interface PlanSelectionParams extends BaseEventParams {
  plan_name: 'starter' | 'professional' | 'enterprise';
  plan_price?: number;
  currency?: string;
  button_location: string;
}

interface ContactFormParams extends BaseEventParams {
  subject: string;
  source_page: string;
}

/**
 * Helper function to extract email domain (for privacy-conscious tracking)
 */
function getEmailDomain(email: string): string | undefined {
  if (!email || !email.includes('@')) return undefined;
  const domain = email.split('@')[1];
  return domain || undefined;
}

/**
 * Helper function to check if gtag is available
 */
function isGtagAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

/**
 * Base tracking function
 */
function trackEvent(eventName: string, eventParams: Record<string, any> = {}): void {
  if (!isGtagAvailable()) {
    console.warn('GA4 gtag not available. Event not tracked:', eventName);
    return;
  }

  // Add default page parameters
  const params = {
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
    ...eventParams,
  };

  // Filter out undefined values
  const cleanParams = Object.entries(params).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, any>);

  window.gtag!('event', eventName, cleanParams);

  // Debug logging in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('📊 GA4 Event:', eventName, cleanParams);
  }
}

/**
 * Track Hero "Generate Preview" button click
 */
export function trackGeneratePreview(urlEntered?: string): void {
  trackEvent('generate_preview', {
    button_location: 'hero',
    button_text: 'generate_preview',
    cta_type: 'primary',
    url_entered: urlEntered || undefined,
  });
}

/**
 * Track demo request form submission
 */
export function trackDemoRequest(email?: string, url?: string): void {
  const params: FormSubmitParams = {
    form_name: 'demo_request',
    form_location: 'homepage_cta',
  };

  if (email) {
    params.email_domain = getEmailDomain(email);
  }

  if (url) {
    params.url_entered = url;
  }

  trackEvent('request_demo', params);
}

/**
 * Track pricing plan selection
 */
export function trackPlanSelection(
  planName: 'starter' | 'professional' | 'enterprise',
  planPrice?: number,
  location: string = 'pricing_page'
): void {
  const params: PlanSelectionParams = {
    plan_name: planName,
    button_location: location,
    currency: 'USD',
  };

  if (planPrice) {
    params.plan_price = planPrice;
  }

  trackEvent('select_plan', params);
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(subject: string, sourcePage?: string): void {
  const params: ContactFormParams = {
    subject: subject,
    source_page: sourcePage || window.location.pathname,
  };

  trackEvent('contact_form_submit', params);
}

/**
 * Track generic CTA button clicks
 */
export function trackCTAClick(
  buttonText: string,
  location: string,
  type: 'primary' | 'secondary' | 'navigation' = 'secondary',
  destinationUrl?: string
): void {
  const params: CTAClickParams = {
    button_text: buttonText,
    button_location: location,
    cta_type: type,
  };

  if (destinationUrl) {
    params.destination_url = destinationUrl;
  }

  trackEvent('cta_click', params);
}

/**
 * Track "Get Started" CTA clicks
 */
export function trackGetStartedClick(location: string, destinationUrl?: string): void {
  trackEvent('get_started_click', {
    button_text: 'get_started',
    button_location: location,
    cta_type: 'primary',
    destination_url: destinationUrl,
  });
}

/**
 * Track "Contact Sales" clicks
 */
export function trackContactSalesClick(location: string): void {
  trackEvent('contact_sales_click', {
    button_text: 'contact_sales',
    button_location: location,
    cta_type: 'secondary',
  });
}

/**
 * Track "Try Free" header CTA clicks
 */
export function trackTryFreeClick(device: 'desktop' | 'mobile'): void {
  trackEvent('cta_click', {
    button_text: 'try_free',
    button_location: 'header',
    cta_type: 'navigation',
    device: device,
  });
}

/**
 * Track external link clicks (Discord, GitHub, etc.)
 */
export function trackExternalLinkClick(
  platform: string,
  location: string,
  url?: string
): void {
  trackEvent('external_link_click', {
    platform: platform,
    link_location: location,
    destination_url: url,
  });
}

/**
 * Track navigation link clicks
 */
export function trackNavigationClick(linkText: string, destination: string): void {
  trackEvent('navigation_click', {
    link_text: linkText,
    destination: destination,
  });
}

/**
 * Generic form submission tracker with custom parameters
 */
export function trackFormSubmit(
  formName: string,
  formLocation: string,
  additionalParams?: Record<string, any>
): void {
  trackEvent('form_submit', {
    form_name: formName,
    form_location: formLocation,
    ...additionalParams,
  });
}

// Export helper for direct access if needed
export { trackEvent };
