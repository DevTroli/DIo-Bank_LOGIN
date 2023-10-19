import { Box, ChakraProvider } from '@chakra-ui/react'
const Header = () => (
  <ChakraProvider>
    <Box display={'flex'} justifyContent={'center'} m={'2rem'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="63"
        height="25"
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="url(#b)"
            d="M43.211 24.399c5.947 0 10.77-4.757 10.77-10.625 0-5.869-4.822-10.625-10.77-10.625-5.948 0-10.77 4.756-10.77 10.625 0 5.868 4.822 10.625 10.77 10.625Z"
          />
          <path
            fill="url(#c)"
            d="M26.99 8.395c2.276 0 4.122-1.879 4.122-4.198C31.112 1.88 29.266 0 26.989 0c-2.276 0-4.12 1.88-4.12 4.197 0 2.32 1.844 4.198 4.12 4.198Z"
          />
          <path
            fill="#F34C5D"
            d="M58.502 24.393c2.35 0 4.255-1.82 4.255-4.067 0-2.246-1.905-4.066-4.255-4.066-2.35 0-4.254 1.82-4.254 4.066 0 2.246 1.904 4.067 4.254 4.067Z"
          />
          <path
            fill="url(#d)"
            d="M21.538.261a6.956 6.956 0 0 0-6.254 3.86 10.79 10.79 0 0 0-4.526-.981C4.817 3.14 0 7.9 0 13.769c0 5.87 4.817 10.629 10.758 10.629 5.941 0 10.758-4.76 10.758-10.63L21.539.263Z"
          />
          <path
            fill="url(#e)"
            d="M26.96 8.395a4.12 4.12 0 0 0-2.893 1.183 4.01 4.01 0 0 0-1.199 2.854v12.23c4.555 0 8.243-3.64 8.243-8.134v-4.036a4.074 4.074 0 0 0-1.217-2.895 4.185 4.185 0 0 0-2.935-1.202Z"
          />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1="32.436"
            x2="53.981"
            y1="13.774"
            y2="13.774"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6948D0" />
            <stop offset="1" stopColor="#DF4D68" />
          </linearGradient>
          <linearGradient
            id="c"
            x1="22.868"
            x2="31.108"
            y1="4.2"
            y2="4.2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4E67DE" />
            <stop offset="1" stopColor="#6948D0" />
          </linearGradient>
          <linearGradient
            id="d"
            x1="-.005"
            x2="21.539"
            y1="12.331"
            y2="12.331"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18B0F4" />
            <stop offset="1" stopColor="#4E67DE" />
          </linearGradient>
          <linearGradient
            id="e"
            x1="22.865"
            x2="31.108"
            y1="16.53"
            y2="16.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4E67DE" />
            <stop offset="1" stopColor="#6948D0" />
          </linearGradient>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h63v25H0z" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  </ChakraProvider>
)

export default Header
