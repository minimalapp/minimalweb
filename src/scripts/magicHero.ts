// Magic Hero Animation Script
// Scoped Overlay Version with Skip Logic

interface MagicTranslations {
  words: string[];
  phrases: string[];
}

let words: string[] = ['Transform', 'Modernize', 'Revolutionize'];
let phrases: string[] = ['your website', 'your brand', 'your business'];
let currentWordIndex = 0;
let introFinished = false;

// Typewriter effect with natural timing variations
function typeWord(word: string, element: HTMLElement, callback: () => void): void {
  if (introFinished) return; // Stop typing if finished

  element.textContent = word.charAt(0);
  element.classList.add('typing');

  let i = 1;

  function typeChar(): void {
    if (introFinished) return; // Stop typing if finished

    if (i < word.length) {
      element.textContent += word.charAt(i);
      i++;
      // Natural typing variations: 50-200ms between characters
      const delay = Math.random() * 150 + 50;
      setTimeout(typeChar, delay);
    } else {
      // Word completed, call callback after brief pause
      setTimeout(callback, 800);
    }
  }

  typeChar();
}

function showLoadingDots(): void {
  if (introFinished) return;

  const loadingDots = document.getElementById('loadingDots');
  const magicText = document.getElementById('magicText');

  if (loadingDots && magicText) {
    // Hide text first
    magicText.style.opacity = '0';

    // Then show loading dots
    setTimeout(() => {
      if (introFinished) return;
      loadingDots.classList.add('show');

      // After 1 second, start next cycle
      setTimeout(() => {
        if (introFinished) return;
        hideLoadingDotsAndShowText();
      }, 1000);
    }, 300);
  }
}

function hideLoadingDotsAndShowText(): void {
  if (introFinished) return;

  const loadingDots = document.getElementById('loadingDots');
  if (loadingDots) {
    loadingDots.classList.remove('show');

    // Wait a bit then show text
    setTimeout(() => {
      if (introFinished) return;
      showText();
    }, 300);
  }
}

function showText(): void {
  if (introFinished) return;

  const magicText = document.getElementById('magicText');
  const textLine1 = document.getElementById('textLine1');
  const textLine2 = document.getElementById('textLine2');
  const magicWord = document.getElementById('magicWord');

  if (magicText && textLine1 && textLine2 && magicWord) {
    // Show text container
    magicText.style.opacity = '1';

    // Update the phrase text for current word
    textLine2.textContent = phrases[currentWordIndex];

    // Show second line first
    textLine2.classList.add('show');

    // Then show and type first line
    textLine1.classList.add('show');

    const word = words[currentWordIndex];
    typeWord(word, magicWord, () => {
      if (introFinished) return;

      // Word typed, wait a moment then continue
      setTimeout(() => {
        if (introFinished) return;

        // Hide text lines
        textLine1.classList.remove('show');
        textLine2.classList.remove('show');
        magicWord.classList.remove('typing');

        // Move to next word
        currentWordIndex++;

        // If we have more words, continue cycle
        if (currentWordIndex < words.length) {
          setTimeout(() => {
            if (introFinished) return;
            showLoadingDots();
          }, 500);
        } else {
          // All words done, finish intro
          setTimeout(() => {
            finishIntro();
          }, 1000);
        }
      }, 500);
    });
  }
}

function finishIntro(): void {
  if (introFinished) return;
  introFinished = true;

  const magicHero = document.getElementById('magicHero');
  const staticHeroContent = document.getElementById('static-hero-content');
  const magicText = document.getElementById('magicText');
  const loadingDots = document.getElementById('loadingDots');
  const introBackground = document.getElementById('intro-background');

  // Remove event listeners
  document.removeEventListener('click', skipIntro);
  window.removeEventListener('scroll', skipIntro);

  if (magicHero) {
    // Immediately disable pointer events to allow clicks through
    magicHero.style.pointerEvents = 'none';

    // Fade out magic hero overlay
    magicHero.style.transition = 'opacity 0.8s ease-out';
    magicHero.style.opacity = '0';

    // Immediately hide inner elements to prevent ghosting
    if (magicText) magicText.style.opacity = '0';
    if (loadingDots) loadingDots.style.opacity = '0';

    // Remove magic hero from DOM after animation
    setTimeout(() => {
      magicHero.style.display = 'none';
    }, 800);
  }

  if (introBackground) {
    // Fade out background
    introBackground.style.opacity = '0';

    // Remove from DOM
    setTimeout(() => {
      introBackground.style.display = 'none';
    }, 1000);
  }

  if (staticHeroContent) {
    // Reveal static content
    staticHeroContent.classList.remove('opacity-0');
  }

  // Reveal extra content (form, visual) that might be hidden on desktop
  const extraContent = document.querySelectorAll('.hero-extra-content');
  extraContent.forEach(el => {
    el.classList.remove('md:opacity-0');
  });

  // Update body classes for gradient overlays
  document.body.classList.remove('intro-mode');
  document.body.classList.add('main-page-mode');
}

function skipIntro(): void {
  finishIntro();
}

// Initialize and start magic hero animation
export function initMagicHero(translations: MagicTranslations): void {
  // Update words and phrases from translations
  if (translations.words && translations.words.length > 0) {
    words = translations.words;
  }
  if (translations.phrases && translations.phrases.length > 0) {
    phrases = translations.phrases;
  }

  // Start sequence immediately
  // Check if we should skip animation (e.g. user has visited before or prefers reduced motion)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    finishIntro();
    return;
  }

  // Add intro-mode class to body
  document.body.classList.add('intro-mode');

  // Add skip listeners
  document.addEventListener('click', skipIntro);
  window.addEventListener('scroll', skipIntro);

  // Start the animation sequence with loading dots
  setTimeout(() => {
    if (introFinished) return;
    const loadingDots = document.getElementById('loadingDots');
    if (loadingDots) {
      loadingDots.classList.add('show');

      // After 1 second, start first cycle
      setTimeout(() => {
        if (introFinished) return;
        hideLoadingDotsAndShowText();
      }, 1000);
    }
  }, 100);
}
