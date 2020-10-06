import { createGlobalStyle } from 'styled-components';

import 

const GlobalFonts = createGlobalStyle`
	@font-face {
		font-family: 'product-sans-bold';
		src: url('${ProductSansBold}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'product-sans-light';
		src: url('${ProductSansLight}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'product-sans-medium';
		src: url('${ProductSansMedium}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
    @font-face {
		font-family: 'product-sans-regular';
	    src: url('${ProductSansRegular}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'product-sans-thin';
		src: url('${ProductSansThin}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'pt-mono-regular';
		src: url('${PTMonoRegular}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'devil-breeze';
		src: url('${DevilBreeze}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
`;

export default GlobalFonts;