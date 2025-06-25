'use client';

import './settings-menu.style.css';
import { useEffect, useState } from 'react';
import { RxLetterCaseCapitalize, RxLetterCaseLowercase } from 'react-icons/rx';
import { ImEyePlus } from 'react-icons/im';
import { CiCircleList } from 'react-icons/ci';
import { PiSelectionBackgroundDuotone } from 'react-icons/pi';

type FontSize = 'md' | 'lg';

export const FontSizeSettings = () => {
  const [font, setFont] = useState<FontSize>('md');
  const [dyslexia, setDyslexia] = useState<boolean>(false);
  const [toc, setToc] = useState<boolean>(false);
  const [background, setBackground] = useState<boolean>(false);

  useEffect(() => {
    const page = document.querySelector('.article-content');

    if (font === 'lg') {
      page?.classList.add('font-lg');
      page?.classList.remove('font-sm');
      page?.classList.remove('font-md');
    } else {
      page?.classList.add('font-md');
      page?.classList.remove('font-sm');
      page?.classList.remove('font-lg');
    }
  }, [font]);

  useEffect(() => {
    const page = document.querySelector('.article-content');

    if (dyslexia) {
      page?.classList.add('font-dyslexia');
    } else {
      page?.classList.remove('font-dyslexia');
    }
  }, [dyslexia]);

  useEffect(() => {
    const tocList = document.querySelector('.toc');

    if (toc) {
      tocList?.classList.add('toc-enable');
    } else {
      tocList?.classList.remove('toc-enable');
    }
  }, [toc]);

  useEffect(() => {
    const backgroundSelector = document.querySelector('.background');

    if (background) {
      backgroundSelector?.classList.add('show-bg');
    } else {
      backgroundSelector?.classList.remove('show-bg');
    }
  }, [background]);

  const handleChangeFont = (value: FontSize) => {
    setFont(value);
  };

  const handleDyslexiaChange = () => {
    setDyslexia(!dyslexia);
  };

  const handleTOC = () => {
    setToc(!toc);
  };

  const handleBackgroundChange = () => {
    setBackground(!background);
  };

  return (
    <div className="settings-menu">
      <div
        data-tooltip="Enable/Disable moving background"
        className={`setting background-button ${background ? 'selected' : ''}`}
        onClick={handleBackgroundChange}
      >
        <PiSelectionBackgroundDuotone />
      </div>
      {font === 'md' ?
        <div
          data-tooltip="Standard font size"
          className={`setting normal-font`}
          onClick={() => handleChangeFont('lg')}
        >
          <RxLetterCaseLowercase />
        </div>
      : <div
          data-tooltip="Large font size"
          className={`setting large-font selected`}
          onClick={() => handleChangeFont('md')}
        >
          <RxLetterCaseCapitalize />
        </div>
      }
      <div
        data-tooltip="Dyslexia font"
        className={`setting ${dyslexia ? 'selected' : ''}`}
        onClick={handleDyslexiaChange}
      >
        <ImEyePlus />
      </div>
      <div
        data-tooltip="Table of content"
        className={`setting ${toc ? 'selected' : ''}`}
        onClick={handleTOC}
      >
        <CiCircleList />
      </div>
    </div>
  );
};
