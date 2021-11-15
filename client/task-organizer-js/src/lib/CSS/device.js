/* This file gives all the responsive web design dimensions to be used in the Styled Components */

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}


export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL}`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
    mobileSMax: `(max-width: ${size.mobileM})`,
    mobileMMax: `(max-width: ${size.mobileL})`,
    mobileLMax: `(max-width: ${size.tablet})`,
    tabletMax: `(max-width: ${size.laptop})`,
    laptopMax: `(max-width: ${size.laptopL})`,
    laptopLMax: `(max-width: ${size.desktop}))`    
};

export default device;