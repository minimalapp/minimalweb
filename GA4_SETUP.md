# Google Analytics 4 Conversion Tracking Setup Guide

This guide will walk you through setting up and configuring conversion tracking for all CTAs on the Minimal.lat website.

## Table of Contents
1. [Overview](#overview)
2. [Events Being Tracked](#events-being-tracked)
3. [GA4 Admin Configuration](#ga4-admin-configuration)
4. [Setting Up Conversions](#setting-up-conversions)
5. [Testing Your Implementation](#testing-your-implementation)
6. [Understanding Your Data](#understanding-your-data)
7. [Troubleshooting](#troubleshooting)

---

## Overview

Your website now has comprehensive event tracking implemented using Google Analytics 4. All critical conversion points are being tracked and sending data to your GA4 property (Measurement ID: `G-1N7WSHVF9F`).

### What's Been Implemented

✅ **Centralized Analytics Module** (`/src/scripts/analytics.ts`)
- Type-safe event tracking functions
- Automatic page context inclusion
- Privacy-conscious data handling (email domains, not full emails)
- Development mode debug logging

✅ **Tracked Components**
- Homepage Hero (Generate Preview button)
- Homepage CTA form (Demo Request)
- Pricing section (all 3 plan CTAs)
- Header navigation (Try Free button - desktop & mobile)
- Contact forms (both EN and ES versions)
- Features page CTAs (Get Started & Contact Sales)

---

## Events Being Tracked

Here's a complete list of all events being tracked on your website:

### Primary Conversion Events

| Event Name | Description | Key Parameters | Where It Fires |
|------------|-------------|----------------|----------------|
| `generate_preview` | User clicks "Generate Preview" in hero | `button_location`, `url_entered` | Homepage hero section |
| `request_demo` | User submits demo request form | `email_domain`, `url_entered`, `form_location` | Homepage bottom CTA |
| `select_plan` | User clicks pricing plan button | `plan_name`, `plan_price`, `currency` | Pricing section |
| `contact_form_submit` | User submits contact form | `subject`, `source_page` | /contact and /es/contact |
| `get_started_click` | User clicks "Get Started" CTA | `button_location`, `destination_url` | Features page |
| `contact_sales_click` | User clicks "Contact Sales" | `button_location` | Features page |

### Secondary Engagement Events

| Event Name | Description | Key Parameters | Where It Fires |
|------------|-------------|----------------|----------------|
| `cta_click` | Generic CTA button clicks | `button_text`, `button_location`, `cta_type`, `device` | Header "Try Free" buttons |

### Event Parameters (Common Across All Events)

Every event automatically includes:
- `page_path` - Current page URL path
- `page_location` - Full URL
- `page_title` - Page title

---

## GA4 Admin Configuration

### Step 1: Access Your GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (the one with ID `G-1N7WSHVF9F`)
3. Click **Admin** (gear icon in bottom left)

### Step 2: Verify Data is Flowing

Before setting up conversions, make sure events are being received:

1. In the left sidebar, click **Reports** > **Realtime**
2. Open your website in another tab
3. Click on various CTAs (hero button, pricing plans, forms)
4. Back in GA4, you should see events appearing in real-time
5. Click on an event name to see its parameters

**Expected Events in Realtime:**
- `generate_preview`
- `request_demo`
- `select_plan`
- `cta_click`
- `contact_form_submit`
- `get_started_click`
- `contact_sales_click`

---

## Setting Up Conversions

Now that events are flowing, mark them as conversions:

### Step 3: Mark Events as Conversions

1. In **Admin**, under **Data display**, click **Events**
2. You should see your custom events listed (may take 24 hours to appear initially)
3. For each event you want to track as a conversion, toggle the **Mark as conversion** switch

**Recommended Conversions to Mark:**

#### High Priority (Critical Business Events)
- ✅ `request_demo` - Most valuable conversion
- ✅ `select_plan` - Direct purchase intent
- ✅ `contact_form_submit` - Lead generation
- ✅ `contact_sales_click` - High-value lead indicator

#### Medium Priority (Engagement Signals)
- ✅ `get_started_click` - Strong intent signal
- ✅ `generate_preview` - Top-of-funnel engagement

#### Optional (Additional Context)
- `cta_click` - General engagement tracking

### Step 4: Create Custom Conversion Events (Optional)

You can also create more granular conversions based on parameters:

#### Example: Track Enterprise Plan Selections Only

1. Go to **Admin** > **Events** > **Create Event**
2. Click **Create** button
3. Configure:
   - **Custom event name:** `select_plan_enterprise`
   - **Matching conditions:**
     - Parameter: `event_name` equals `select_plan`
     - AND Parameter: `plan_name` equals `enterprise`
   - **Copy parameters from the source event:** Yes
4. Click **Create**
5. Wait 24 hours, then mark `select_plan_enterprise` as a conversion

#### Example: Track Demo Requests with URL

1. Create event: `request_demo_with_url`
2. Matching conditions:
   - Parameter: `event_name` equals `request_demo`
   - AND Parameter: `url_entered` does not equal `(not set)`
3. Mark as conversion

---

## Testing Your Implementation

### Method 1: Real-Time Reports

1. Go to **Reports** > **Realtime** in GA4
2. Open your website
3. Perform these test actions:
   - Enter a URL in hero section and click "Generate Preview"
   - Fill out the demo request form at the bottom
   - Click on each pricing plan button (Starter, Professional, Enterprise)
   - Click "Try Free" in the header
   - Submit the contact form with different subjects
   - Navigate to Features page and click CTAs

4. In Realtime, verify each event appears with correct parameters

### Method 2: Browser Console (Development Mode)

If testing on localhost:

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Perform actions on the site
4. Look for log messages like: `📊 GA4 Event: generate_preview {...}`

### Method 3: DebugView

1. In GA4, go to **Admin** > **DebugView**
2. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
3. Enable the extension
4. Visit your website
5. All events will appear in DebugView with full parameter details

**What to Check:**
- ✅ Event names are correct
- ✅ Parameters contain expected values
- ✅ Email domains (not full emails) are captured
- ✅ URLs entered by users are captured
- ✅ Plan names and prices are correct

---

## Understanding Your Data

### Where to Find Conversion Data

#### Conversions Report
**Path:** Reports > Engagement > Conversions

Shows:
- Total conversion count per event
- Conversion rate
- Total users who converted

#### Events Report
**Path:** Reports > Engagement > Events

Shows:
- All events with counts
- Event parameters
- Can be filtered and segmented

#### Exploration (Advanced Analysis)

1. Go to **Explore** in left sidebar
2. Create a new **Funnel Exploration**
3. Set up funnel steps:
   - Step 1: `page_view` (homepage)
   - Step 2: `generate_preview`
   - Step 3: `request_demo`

This shows drop-off rates at each stage.

### Key Metrics to Monitor

| Metric | Where to Find | What It Tells You |
|--------|---------------|-------------------|
| Demo Requests | `request_demo` event count | Lead generation effectiveness |
| Plan Interest | `select_plan` by `plan_name` | Which tier customers prefer |
| Form Conversion Rate | Users with `request_demo` / Total users | Form effectiveness |
| Contact Subject Distribution | `contact_form_submit` by `subject` | Types of inquiries |
| Device Split | `cta_click` by `device` parameter | Mobile vs. desktop engagement |

### Creating Custom Reports

#### Example: Pricing Plan Performance

1. Go to **Explore** > Create new **Free Form** exploration
2. Dimensions: Add `plan_name` (from event parameter)
3. Metrics: Add `Event count`
4. Filters: Event name = `select_plan`
5. Add metric: `Conversions` (if marked as conversion)

This shows which pricing tier gets the most clicks.

#### Example: Form Subjects Analysis

1. Create Free Form exploration
2. Dimensions: `subject` (from event parameter)
3. Metrics: Event count for `contact_form_submit`
4. Visualize as pie chart

---

## Troubleshooting

### Events Not Appearing in GA4

**Problem:** Events aren't showing up in Realtime or reports.

**Solutions:**

1. **Check Browser Console**
   - Open DevTools > Console
   - Look for errors related to `gtag` or `analytics.ts`
   - If you see "GA4 gtag not available" warnings, check script loading

2. **Verify GA4 Script is Loaded**
   - View page source
   - Search for `G-1N7WSHVF9F`
   - Should see gtag.js script tag in `<head>`

3. **Check Ad Blockers**
   - Disable ad blockers and privacy extensions
   - They often block Google Analytics

4. **Wait for Data Processing**
   - Realtime: Instant
   - Events list: Up to 24 hours
   - Full reports: 24-48 hours

### Events Firing But Parameters Missing

**Problem:** Events appear but don't include expected parameters like `url_entered` or `plan_name`.

**Solutions:**

1. **Check Form Values**
   - Ensure forms have ID attributes matching the code
   - Verify input elements have correct IDs

2. **Inspect in DebugView**
   - Enable GA Debug extension
   - See exact parameter values being sent
   - Look for `undefined` or empty values

3. **Test Data Attributes**
   - For pricing buttons, check `data-plan-name` and `data-plan-price` attributes exist
   - View in browser DevTools > Elements tab

### Conversions Not Counting

**Problem:** Events fire but don't show in Conversions report.

**Solutions:**

1. **Mark Events as Conversions**
   - Go to Admin > Events
   - Toggle "Mark as conversion" switch
   - Wait 24-48 hours for data to process

2. **Check Conversion Settings**
   - In Admin > Events, ensure conversion toggle is ON (blue)
   - Some events may need 24 hours to be eligible for marking

### High Bounce Rate on Forms

**Problem:** Users start filling forms but don't complete them.

**Solutions:**

1. **Check Form Validation**
   - Ensure required fields aren't blocking submission
   - Test form on different devices

2. **Review Form Alerts**
   - Current implementation uses `alert()` for feedback
   - Consider replacing with better UX (toast notifications, inline messages)

3. **Analyze Drop-off Points**
   - Create funnel in Explore:
     - Form field focus events (would need to add)
     - Form submission events

### Testing in Development

**Problem:** Want to test without polluting production data.

**Solutions:**

1. **Filter Dev Traffic in GA4**
   - Go to Admin > Data Streams > Web stream
   - Click "Configure tag settings"
   - Under "Settings", create filter to exclude localhost traffic

2. **Use Debug Mode**
   - Events from GA Debugger extension go to DebugView
   - They don't affect main reports during testing

3. **Create Test Property**
   - In Admin, create new GA4 property for testing
   - Update Measurement ID in `BaseLayout.astro` for dev environment
   - Use environment variables to switch IDs

---

## Data Privacy & Compliance

### What Data We're Collecting

✅ **Safe to Collect:**
- Email domains (e.g., `gmail.com`, not `user@gmail.com`)
- URLs entered by users
- Button clicks and locations
- Page paths and titles
- Plan selections and pricing tier interest

❌ **Not Collecting:**
- Full email addresses
- Passwords or sensitive form data
- Personal names or identifying information
- Payment information

### GDPR & Privacy Considerations

Current implementation is designed with privacy in mind:

1. **Email Privacy**: Only domain extracted (`user@example.com` → `example.com`)
2. **No PII**: Names, phone numbers, messages not sent to GA4
3. **Consent**: Ensure you have proper cookie consent banner if operating in EU

**Recommendations:**
- Add cookie consent banner (e.g., using Cookiebot, OneTrust, or custom)
- Update Privacy Policy to mention Google Analytics usage
- Consider anonymizing IP addresses (GA4 does this by default)

---

## Next Steps

### Short Term (Week 1)

1. ✅ Verify all events are firing correctly
2. ✅ Mark critical events as conversions
3. ✅ Monitor Realtime report during site updates
4. ✅ Check daily for first 3 days to ensure data quality

### Medium Term (Month 1)

1. Create custom funnels to understand user journey
2. Set up audiences based on conversion events
3. Create custom alerts for significant conversion changes
4. Build dashboard with key conversion metrics

### Long Term (Ongoing)

1. A/B test different CTA copy and track performance
2. Correlate conversion data with traffic sources
3. Export data to BigQuery for advanced analysis
4. Integrate with Google Ads for conversion tracking

---

## Support & Resources

### Useful GA4 Resources

- [GA4 Event Documentation](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GA4 Conversions Guide](https://support.google.com/analytics/answer/9267568)
- [GA4 DebugView](https://support.google.com/analytics/answer/7201382)

### Analytics Module Documentation

The centralized analytics module (`/src/scripts/analytics.ts`) includes:

- **Type-safe functions** for each event type
- **Automatic parameter validation**
- **Debug logging** in development
- **Helper functions** for common tasks

### Adding New Events

To track additional events:

1. Add new function to `/src/scripts/analytics.ts`:
```typescript
export function trackNewEvent(param1: string): void {
  trackEvent('new_event_name', {
    custom_param: param1,
    // Add other parameters
  });
}
```

2. Import in your component:
```typescript
import { trackNewEvent } from '@/scripts/analytics';
```

3. Call when event occurs:
```typescript
button.addEventListener('click', () => {
  trackNewEvent('value');
});
```

4. Wait 24 hours for event to appear in GA4 Events list
5. Mark as conversion if needed

---

## Contact

If you need help with analytics implementation or have questions:

- Check browser console for error messages
- Review this documentation
- Test in DebugView mode
- Verify implementation in Realtime reports

---

**Document Version:** 1.0
**Last Updated:** 2025-11-03
**GA4 Property:** G-1N7WSHVF9F
**Implementation Status:** ✅ Complete
