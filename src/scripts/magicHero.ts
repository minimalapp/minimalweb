// Magic Hero Animation Script
// Adapted from production main.js lines 839-1109

interface MagicTranslations {
  words: string[];
  phrases: string[];
}

let words: string[] = ['Transform', 'Modernize', 'Revolutionize'];
let phrases: string[] = ['your website', 'your brand', 'your business'];
let currentWordIndex = 0;
let introFinished = false;
let introScrollTimeout: ReturnType<typeof setTimeout>;
let handleScroll: (() => void) | null = null;

// Typewriter effect with natural timing variations
function typeWord(word: string, element: HTMLElement, callback: () => void): void {
  element.textContent = word.charAt(0);
  element.classList.add('typing');

  let i = 1;

  function typeChar(): void {
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
  const loadingDots = document.getElementById('loadingDots');
  const magicText = document.getElementById('magicText');

  if (loadingDots && magicText) {
    // Hide text first
    magicText.style.opacity = '0';

    // Then show loading dots
    setTimeout(() => {
      loadingDots.classList.add('show');

      // After 1 second, start next cycle
      setTimeout(() => {
        hideLoadingDotsAndShowText();
      }, 1000);
    }, 300);
  }
}

function hideLoadingDotsAndShowText(): void {
  const loadingDots = document.getElementById('loadingDots');
  if (loadingDots) {
    loadingDots.classList.remove('show');

    // Wait a bit then show text
    setTimeout(() => {
      showText();
    }, 300);
  }
}

function showText(): void {
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
      // Word typed, wait a moment then continue
      setTimeout(() => {
        // Hide text lines
        textLine1.classList.remove('show');
        textLine2.classList.remove('show');
        magicWord.classList.remove('typing');

        // Move to next word
        currentWordIndex++;

        // If we have more words, continue cycle
        if (currentWordIndex < words.length) {
          setTimeout(() => {
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

function activateMainPageMode(): void {
  document.body.classList.add('main-page-mode');
}

function finishIntro(isScrollTriggered = false): void {
  if (introFinished) return; // Prevent multiple calls
  introFinished = true;

  const magicHero = document.getElementById('magicHero');
  const mainHero = document.getElementById('mainHero');

  if (magicHero && mainHero) {
    // Remove click listeners
    document.removeEventListener('click', skipIntro);

    // Remove scroll listener
    // if (handleScroll) {
    //   window.removeEventListener('scroll', handleScroll);
    // }

    // Use immediate transitions when triggered by scroll - ULTRA fast
    const fadeOutDuration = isScrollTriggered ? '0.05s' : '0.8s';
    const fadeInDuration = isScrollTriggered ? '0.1s' : '1s';
    const fadeInDelay = isScrollTriggered ? 10 : 500;
    const activateModeDelay = isScrollTriggered ? 50 : 1000;
    const removeDomDelay = isScrollTriggered ? 100 : 1500;

    // Add scroll-triggered class for faster CSS transition
    if (isScrollTriggered) {
      magicHero.classList.add('scroll-triggered');
    }

    // First, fade out gradient overlays temporarily during intro transition
    const leftOverlay = document.querySelector('.gradient-overlay-left') as HTMLElement;
    const rightOverlay = document.querySelector('.gradient-overlay-right') as HTMLElement;

    if (leftOverlay && rightOverlay) {
      leftOverlay.style.transition = `opacity ${fadeOutDuration} ease-out`;
      rightOverlay.style.transition = `opacity ${fadeOutDuration} ease-out`;
      leftOverlay.style.opacity = '0';
      rightOverlay.style.opacity = '0';

      // Remove inline opacity styles after transition so CSS classes can control visibility
      setTimeout(() => {
        leftOverlay.style.opacity = '';
        rightOverlay.style.opacity = '';
        leftOverlay.style.transition = '';
        rightOverlay.style.transition = '';
      }, parseFloat(fadeOutDuration) * 1000 + 100);
    }

    // Fade out magic hero
    magicHero.classList.add('hidden');

    // Fade in main hero
    setTimeout(() => {
      mainHero.style.opacity = '1';
      mainHero.style.transition = `opacity ${fadeInDuration} ease-in`;

      // Switch from intro mode to main page mode after a delay
      setTimeout(() => {
        activateMainPageMode();
      }, activateModeDelay);
    }, fadeInDelay);

    // Remove magic hero from DOM after animation
    setTimeout(() => {
      if (magicHero.parentNode) {
        magicHero.remove();
      }
      // Remove intro-mode class from body
      document.body.classList.remove('intro-mode');
    }, removeDomDelay);
  }
}

// Add click to skip intro functionality - immediate dismissal
function skipIntro(): void {
  finishIntro(true); // Pass true for immediate transition
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

  // Add intro-mode class to body
  document.body.classList.add('intro-mode');

  // Immediately scroll to top on page load
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  // Handle scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Function to start the magic sequence
  function startMagicSequence() {
    // Always scroll to top first
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const magicHero = document.getElementById('magicHero');
    const magicText = document.getElementById('magicText');
    const loadingDots = document.getElementById('loadingDots');

    if (!magicHero || !magicText || !loadingDots) return;

    // Small delay to ensure scroll has completed
    setTimeout(() => {
      // Verify we're at the top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;

      // Magic hero is already visible, just ensure it's displayed
      magicHero.style.display = 'flex';
      magicHero.style.opacity = '1';

      // Add click listener to skip intro
      magicHero.addEventListener('click', skipIntro);

      // Also add click listener to document during intro
      document.addEventListener('click', skipIntro);

      // Add scroll listener to immediately dismiss intro on any scroll
      handleScroll = function () {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        if (!introFinished) {
          // Immediately finish intro on any scroll - no debounce, no fade
          if (scrollY > 0) {
            finishIntro(true); // Pass true to indicate scroll-triggered
          }
        } else {
          // Continuous parallax logic for main page - gradients animate throughout entire scroll
          const mainPageScrollY = window.scrollY || document.documentElement.scrollTop;

          const leftOverlay = document.querySelector('.gradient-overlay-left') as HTMLElement;
          const rightOverlay = document.querySelector('.gradient-overlay-right') as HTMLElement;

          if (leftOverlay && rightOverlay) {
            // Continuous rotation and movement based on scroll position
            // Using modulo for continuous rotation and sine/cosine for organic movement
            const scrollFactor = mainPageScrollY * 0.15; // Slow rotation factor
            const waveFactor = mainPageScrollY * 0.08; // Wave movement factor

            // After pseudo-element: continuous rotation with vertical translation
            const rotateAfter = scrollFactor % 360; // Continuous rotation
            const translateYAfter = Math.sin(waveFactor * 0.01) * 30; // Sine wave vertical movement
            const translateXAfter = Math.cos(waveFactor * 0.015) * 20; // Cosine wave horizontal movement
            leftOverlay.style.setProperty('--scroll-transform-after', `translate(${translateXAfter}px, ${translateYAfter}px) rotate(${rotateAfter}deg) scale(${1 + Math.sin(waveFactor * 0.005) * 0.1})`);
            rightOverlay.style.setProperty('--scroll-transform-after', `translate(${-translateXAfter}px, ${translateYAfter}px) rotate(${-rotateAfter}deg) scale(${1 + Math.cos(waveFactor * 0.005) * 0.1})`);

            // Before pseudo-element: counter-rotation with different movement pattern
            const rotateBefore = (scrollFactor * -0.5) % 360; // Slower counter-rotation
            const translateYBefore = Math.cos(waveFactor * 0.012) * 25; // Cosine wave vertical movement
            const translateXBefore = Math.sin(waveFactor * 0.018) * 15; // Sine wave horizontal movement
            leftOverlay.style.setProperty('--scroll-transform-before', `translate(${translateXBefore}px, ${translateYBefore}px) rotate(${rotateBefore}deg)`);
            rightOverlay.style.setProperty('--scroll-transform-before', `translate(${-translateXBefore}px, ${translateYBefore}px) rotate(${-rotateBefore}deg)`);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Allow scrolling but keep position at top initially
      document.body.style.overflow = 'auto';

      // Start sequence: show loading dots first
      setTimeout(() => {
        loadingDots.classList.add('show');

        // After 1 second, start first cycle
        setTimeout(() => {
          hideLoadingDotsAndShowText();
        }, 1000);
      }, 500);
    }, 100);
  }

  // Start magic sequence when page loads
  // Handle both cases: page already loaded or waiting for load event
  if (document.readyState === 'complete') {
    // Page already loaded, start immediately
    startMagicSequence();
  } else {
    // Wait for load event
    window.addEventListener('load', startMagicSequence);
  }
}
