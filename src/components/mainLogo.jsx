import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// mui
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
// next
import { useRouter } from 'next-nprogress-bar';

export const LogoMain = () => {
  const { push } = useRouter();
  return (
    <Box
      sx={{
        cursor: 'pointer',
        tspan: {
          whiteSpace: 'pre'
        },
        svg: {
          width: 150,
          height: 'auto'
        }
      }}
      onClick={() => push('/')}
    >
      <svg width="200" height="53" viewBox="0 0 200 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7396 21.6381C15.5504 20.883 15.1388 19.9635 14.8744 19.2308C14.6717 18.6695 14.2927 17.2495 13.9547 16.9111C13.9536 16.5358 13.3947 15.0064 13.1924 14.6438L12.789 13.4245C12.6283 13.1163 12.864 13.2817 12.35 13.2457L8.27397 13.2511L8.26962 15.7602C8.84552 15.951 9.26104 16.494 9.26104 17.1339C9.26104 17.9329 8.61317 18.5806 7.81411 18.5806C7.01509 18.5806 6.36736 17.9329 6.36736 17.1339C6.36736 16.5453 6.71887 16.0387 7.2232 15.8127C7.41211 15.2253 7.2355 13.9308 7.2768 13.2428L2.8625 13.2523C2.80622 13.3704 2.83111 13.283 2.78071 13.4947C1.94111 22.1006 1.1017 30.7034 0.288392 39.3116C0.0815582 40.4719 -0.184269 42.9023 0.182214 43.9404C0.617324 45.1723 1.59875 46.1193 2.8397 46.525C4.2812 46.8438 6.11461 46.6966 7.6451 46.6967C9.33116 46.697 11.0176 46.6969 12.7031 46.6978L12.6799 39.2414L12.6857 41.0807C12.6898 40.2202 12.6939 39.3609 12.6936 38.5057C12.6932 37.126 12.6941 35.7464 12.6938 34.3669C12.6936 33.406 12.5759 30.9367 12.7398 30.1529L14.3485 34.5642C15.6539 37.9465 17.0796 43.3433 18.7103 46.4259C18.8013 46.851 18.784 46.7008 19.9696 46.6976L24.3843 46.698C26.1502 46.6998 28.3081 46.9565 29.6162 46.062C29.8833 45.8916 29.8948 45.92 29.9705 45.7529C30.7464 45.3627 31.6417 43.83 31.5091 42.3677C31.3725 40.8606 31.2142 39.334 31.072 37.8383C30.7838 34.8058 30.4972 31.759 30.1869 28.7434L29.4709 21.2847C29.2591 19.8725 28.9702 13.9893 28.6151 13.2592L24.2624 13.2428L24.2555 15.7978C24.7786 16.0156 25.1465 16.5318 25.1465 17.1339C25.1465 17.9329 24.4988 18.5806 23.6998 18.5806C22.9007 18.5806 22.2528 17.9329 22.2528 17.1339C22.2528 16.5021 22.6579 15.9647 23.2226 15.7676L23.2144 13.2437L18.779 13.265L18.7837 29.688L15.7396 21.6381Z"
          fill="#F97316"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.26956 15.7212L8.2739 13.2121C8.19623 10.2001 8.12004 7.90911 9.77851 5.83015C11.2621 3.97046 13.1396 2.82631 15.7387 2.82749C17.5426 2.82826 19.3575 3.52879 20.6151 4.62267C20.834 4.81299 20.9279 4.99083 21.1535 5.1859C21.5183 5.50121 21.4516 5.48172 21.7076 5.82296C23.3249 7.97684 23.3422 10.0789 23.2143 13.2047L23.2225 15.7287C23.3719 15.6765 23.5325 15.648 23.6997 15.648C23.8967 15.648 24.0843 15.6875 24.2555 15.7588L24.2624 13.2038C24.0941 9.89028 24.7338 7.77806 22.1887 4.70166L21.5555 4.04587C21.1601 3.59792 19.7519 2.74475 19.0874 2.45893C17.7927 1.90199 16.1121 1.64399 14.5484 1.87312C12.3965 2.18862 10.7009 3.1737 9.34087 4.65922C7.92818 6.20228 7.21852 8.34269 7.21893 10.5988C7.21915 12.2085 7.10465 14.2306 7.21418 15.778C7.39703 15.6946 7.60016 15.648 7.81405 15.648C7.9732 15.648 8.12633 15.6736 8.26956 15.7212Z"
          fill="#F97316"
        />
        <path
          d="M8.42302 15.1778L8.42744 12.6243C8.34987 9.55903 8.27375 7.22757 9.93097 5.11189C11.4134 3.21925 13.2895 2.05489 15.8865 2.05607C17.6891 2.05694 19.5027 2.7699 20.7593 3.88303C20.9781 4.07675 21.0719 4.25772 21.2974 4.45627C21.6617 4.77711 21.5951 4.75733 21.8511 5.10461C23.467 7.29653 23.4843 9.43576 23.3566 12.6167L23.3281 15.1032C23.5536 15.1298 23.7938 15.0322 23.7827 15.1742C23.9794 15.1742 24.226 15.1435 24.397 15.2161L24.4038 12.6159C24.2358 9.24372 24.8749 7.09425 22.3317 3.96332L21.699 3.29611C21.3039 2.84021 19.8969 1.97194 19.2328 1.68106C17.939 1.11433 16.2598 0.851588 14.6972 1.08497C12.547 1.40597 10.8526 2.40838 9.49359 3.92033C8.08207 5.49064 7.37287 7.66891 7.37332 9.96484C7.37343 11.603 7.1178 15.2118 7.1178 15.2118C7.1178 15.2118 7.32095 15.2118 7.96797 15.1032C8.127 15.1032 8.27999 15.1294 8.42302 15.1778Z"
          stroke="#F97316"
          strokeWidth="1.2202"
          strokeMiterlimit="22.9256"
        />
        <path
          d="M46.6319 44.2362C44.5652 44.2362 42.7359 43.7754 41.1439 42.8538C39.552 41.9042 38.2952 40.6055 37.3735 38.9577C36.4798 37.3099 36.0329 35.4107 36.0329 33.2602C36.0329 31.1097 36.4938 29.2105 37.4154 27.5627C38.365 25.9149 39.6497 24.6301 41.2696 23.7085C42.9174 22.7589 44.8026 22.2841 46.9252 22.2841C48.7685 22.2841 50.4582 22.7729 51.9943 23.7504C53.5583 24.7 54.8011 26.1104 55.7228 27.9816C56.6724 29.8249 57.1472 32.0732 57.1472 34.7264H41.2696L41.7723 34.2237C41.7723 35.2571 42.0237 36.1648 42.5264 36.9468C43.057 37.7009 43.7273 38.2874 44.5373 38.7063C45.3751 39.0973 46.2689 39.2928 47.2185 39.2928C48.3635 39.2928 49.2992 39.0554 50.0253 38.5806C50.7515 38.0779 51.31 37.4356 51.701 36.6535L56.6445 38.5806C56.058 39.7537 55.2899 40.7731 54.3403 41.6389C53.4187 42.4767 52.3155 43.1191 51.0307 43.5659C49.746 44.0128 48.2797 44.2362 46.6319 44.2362ZM42.0656 31.1236L41.5628 30.6209H51.6591L51.1983 31.1236C51.1983 30.1182 50.9609 29.3222 50.4861 28.7357C50.0113 28.1213 49.4248 27.6744 48.7266 27.3951C48.0563 27.1158 47.4 26.9762 46.7576 26.9762C46.1153 26.9762 45.431 27.1158 44.7049 27.3951C43.9787 27.6744 43.3503 28.1213 42.8196 28.7357C42.3169 29.3222 42.0656 30.1182 42.0656 31.1236ZM57.6555 43.7335L66.2436 31.752L72.2344 22.7868H78.7697L70.4329 34.4751L64.2746 43.7335H57.6555ZM72.6952 43.7335L66.6206 34.4751L58.2001 22.7868H64.7354L70.7262 31.752L79.2724 43.7335H72.6952ZM90.7149 44.2362C88.3968 44.2362 86.6373 43.6637 85.4363 42.5186C84.2633 41.3735 83.6768 39.7397 83.6768 37.6171V16.2515H89.2067V36.4022C89.2067 37.2959 89.4022 37.9802 89.7932 38.455C90.1842 38.9018 90.7568 39.1253 91.5109 39.1253C91.7902 39.1253 92.0974 39.0694 92.4325 38.9577C92.7677 38.818 93.1168 38.6225 93.4799 38.3712L95.4069 42.5186C94.7367 43.0213 93.9826 43.4263 93.1447 43.7335C92.3348 44.0687 91.5248 44.2362 90.7149 44.2362ZM80.2834 27.4789V22.7868H94.4434V27.4789H80.2834ZM107.998 52.6568C106.406 52.6568 104.996 52.5451 103.767 52.3217C102.538 52.0982 101.505 51.805 100.667 51.4419C99.829 51.0788 99.1447 50.7157 98.6141 50.3527L100.793 45.912C101.184 46.1354 101.7 46.3868 102.343 46.6661C102.985 46.9733 103.753 47.2246 104.647 47.4201C105.54 47.6436 106.574 47.7553 107.747 47.7553C108.864 47.7553 109.841 47.5319 110.679 47.085C111.545 46.6661 112.215 45.9958 112.69 45.0741C113.193 44.1804 113.444 43.0353 113.444 41.6389V22.7868H118.974V41.4713C118.974 43.8173 118.527 45.8282 117.634 47.5039C116.74 49.2076 115.469 50.4923 113.821 51.3581C112.201 52.2239 110.26 52.6568 107.998 52.6568ZM106.909 43.147C104.982 43.147 103.306 42.7281 101.882 41.8902C100.485 41.0523 99.3961 39.8793 98.6141 38.3712C97.8321 36.863 97.4411 35.0756 97.4411 33.0088C97.4411 30.8304 97.8321 28.9452 98.6141 27.3532C99.3961 25.7333 100.485 24.4905 101.882 23.6247C103.306 22.731 104.982 22.2841 106.909 22.2841C108.585 22.2841 110.037 22.731 111.266 23.6247C112.495 24.4905 113.444 25.7333 114.115 27.3532C114.785 28.9731 115.12 30.9002 115.12 33.1345C115.12 35.1454 114.785 36.9049 114.115 38.4131C113.444 39.9212 112.495 41.0942 111.266 41.9321C110.037 42.742 108.585 43.147 106.909 43.147ZM108.501 38.4969C109.45 38.4969 110.274 38.2595 110.973 37.7847C111.699 37.2819 112.257 36.6116 112.648 35.7738C113.039 34.908 113.235 33.9305 113.235 32.8412C113.235 31.7241 113.025 30.7466 112.606 29.9087C112.215 29.0708 111.657 28.4145 110.931 27.9397C110.233 27.4649 109.409 27.2275 108.459 27.2275C107.482 27.2275 106.616 27.4649 105.862 27.9397C105.108 28.4145 104.521 29.0708 104.102 29.9087C103.683 30.7466 103.46 31.7241 103.432 32.8412C103.46 33.9305 103.683 34.908 104.102 35.7738C104.521 36.6116 105.108 37.2819 105.862 37.7847C106.644 38.2595 107.523 38.4969 108.501 38.4969ZM136.385 43.7335L136.217 39.5023V33.1345C136.217 31.8777 136.077 30.8024 135.798 29.9087C135.547 29.015 135.128 28.3307 134.541 27.8559C133.983 27.3532 133.215 27.1019 132.237 27.1019C131.343 27.1019 130.533 27.2974 129.807 27.6884C129.081 28.0794 128.467 28.6798 127.964 29.4898L123.104 27.814C123.495 26.9203 124.068 26.0545 124.822 25.2167C125.576 24.3509 126.554 23.6526 127.755 23.122C128.983 22.5634 130.478 22.2841 132.237 22.2841C134.36 22.2841 136.119 22.6891 137.516 23.499C138.94 24.309 139.987 25.454 140.658 26.9343C141.356 28.3866 141.691 30.1182 141.663 32.1291L141.537 43.7335H136.385ZM130.519 44.2362C128.006 44.2362 126.051 43.6777 124.654 42.5605C123.286 41.4434 122.602 39.8654 122.602 37.8266C122.602 35.5922 123.342 33.9165 124.822 32.7994C126.33 31.6543 128.439 31.0817 131.148 31.0817H136.468V35.1873H133.075C131.26 35.1873 130.003 35.4107 129.305 35.8576C128.606 36.2765 128.257 36.877 128.257 37.659C128.257 38.2734 128.537 38.7622 129.095 39.1253C129.654 39.4604 130.436 39.628 131.441 39.628C132.363 39.628 133.173 39.4185 133.871 38.9996C134.597 38.5527 135.17 37.9941 135.589 37.3238C136.008 36.6256 136.217 35.9134 136.217 35.1873H137.558C137.558 38.036 137.013 40.2564 135.924 41.8483C134.862 43.4403 133.061 44.2362 130.519 44.2362ZM154.7 44.2362C152.382 44.2362 150.623 43.6637 149.422 42.5186C148.249 41.3735 147.662 39.7397 147.662 37.6171V16.2515H153.192V36.4022C153.192 37.2959 153.388 37.9802 153.779 38.455C154.17 38.9018 154.742 39.1253 155.496 39.1253C155.776 39.1253 156.083 39.0694 156.418 38.9577C156.753 38.818 157.102 38.6225 157.465 38.3712L159.393 42.5186C158.722 43.0213 157.968 43.4263 157.13 43.7335C156.32 44.0687 155.51 44.2362 154.7 44.2362ZM144.269 27.4789V22.7868H158.429V27.4789H144.269ZM172.026 44.2362C169.959 44.2362 168.13 43.7754 166.538 42.8538C164.946 41.9042 163.689 40.6055 162.767 38.9577C161.873 37.3099 161.427 35.4107 161.427 33.2602C161.427 31.1097 161.887 29.2105 162.809 27.5627C163.759 25.9149 165.043 24.6301 166.663 23.7085C168.311 22.7589 170.196 22.2841 172.319 22.2841C174.162 22.2841 175.852 22.7729 177.388 23.7504C178.952 24.7 180.195 26.1104 181.117 27.9816C182.066 29.8249 182.541 32.0732 182.541 34.7264H166.663L167.166 34.2237C167.166 35.2571 167.417 36.1648 167.92 36.9468C168.451 37.7009 169.121 38.2874 169.931 38.7063C170.769 39.0973 171.663 39.2928 172.612 39.2928C173.757 39.2928 174.693 39.0554 175.419 38.5806C176.145 38.0779 176.704 37.4356 177.095 36.6535L182.038 38.5806C181.452 39.7537 180.684 40.7731 179.734 41.6389C178.812 42.4767 177.709 43.1191 176.424 43.5659C175.14 44.0128 173.673 44.2362 172.026 44.2362ZM167.459 31.1236L166.957 30.6209H177.053L176.592 31.1236C176.592 30.1182 176.355 29.3222 175.88 28.7357C175.405 28.1213 174.819 27.6744 174.12 27.3951C173.45 27.1158 172.794 26.9762 172.151 26.9762C171.509 26.9762 170.825 27.1158 170.099 27.3951C169.372 27.6744 168.744 28.1213 168.213 28.7357C167.711 29.3222 167.459 30.1182 167.459 31.1236ZM189.651 32.7156C189.651 30.4533 190.084 28.5821 190.949 27.1019C191.843 25.6216 192.974 24.5184 194.343 23.7923C195.739 23.0661 197.191 22.7031 198.7 22.7031V28.0654C197.415 28.0654 196.2 28.219 195.055 28.5262C193.938 28.8334 193.03 29.3362 192.332 30.0344C191.634 30.7326 191.284 31.6263 191.284 32.7156H189.651ZM185.755 43.7335V22.7868H191.284V43.7335H185.755Z"
          fill="#292D34"
        />
      </svg>
    </Box>
  );
};
const Logo = forwardRef(({ sx, isMobile, noText }, ref) => {
  const theme = useTheme();
  const { push } = useRouter();
  const PRIMARY_MAIN = theme.palette.primary.main;
  const TEXT_PRIMARY = theme.palette.text.primary;

  return (
    <Button variant="text" sx={{ ml: '-8px' }} onClick={() => push('/')}>
      <Box
        component="svg"
        ref={ref}
        sx={{
          cursor: 'pointer',
          tspan: {
            whiteSpace: 'pre'
          },
          width: 44,
          height: 'auto',
          ...sx
        }}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="279.000000pt"
        height="279.000000pt"
        viewBox="0 0 270.000000 279.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,279.000000) scale(0.100000,-0.100000)" fill={TEXT_PRIMARY} stroke="none">
          <path
            d="M1306 2650 c-471 -60 -874 -387 -1034 -842 -123 -346 -84 -739 103
-1058 125 -212 302 -378 525 -490 279 -140 576 -172 878 -96 235 60 437 178
603 353 103 108 230 299 212 317 -4 3 -19 6 -34 6 -15 0 -56 9 -91 20 -60 19
-64 19 -76 3 -7 -10 -39 -54 -71 -98 -383 -527 -1147 -583 -1607 -118 -272
275 -372 684 -259 1060 98 323 361 593 680 696 197 64 404 70 609 17 92 -23
238 -90 327 -150 87 -58 213 -188 278 -285 30 -44 59 -79 65 -78 21 5 181 48
185 50 2 1 -9 24 -24 50 -191 331 -496 552 -862 628 -92 19 -311 27 -407 15z"
          />
          <path
            fill={PRIMARY_MAIN}
            d="M1317 2225 c-664 -126 -923 -927 -458 -1419 211 -222 536 -311 836
-229 208 57 400 204 505 388 l23 41 -46 62 c-72 98 -92 170 -92 332 0 156 14
204 92 317 l44 65 -33 56 c-46 77 -168 204 -249 258 -77 51 -186 98 -274 120
-92 22 -257 26 -348 9z m328 -292 c83 -21 182 -75 238 -130 26 -25 47 -49 47
-52 0 -7 -119 -116 -167 -154 -23 -19 -24 -19 -63 17 -72 65 -114 81 -215 81
-74 0 -98 -4 -138 -24 -104 -51 -161 -146 -161 -271 -1 -89 21 -160 65 -213
106 -129 319 -135 453 -12 l38 35 94 -87 c52 -47 94 -89 94 -94 0 -17 -116
-111 -173 -139 -118 -57 -295 -76 -440 -45 -248 52 -424 252 -444 503 -27 356
261 630 637 605 41 -2 102 -11 135 -20z"
          />

          <path
            d="M2575 1682 c-77 -33 -77 -33 -66 -83 19 -80 24 -239 11 -334 -7 -49
-13 -99 -14 -109 -1 -26 75 -64 139 -68 l49 -3 14 55 c19 75 22 390 4 488
l-14 72 -41 -1 c-23 0 -60 -8 -82 -17z"
          />
        </g>
      </Box>
      {!noText && (
        <Box
          sx={{
            ml: 0.8,
            '& h5, p': {
              textTransform: 'uppercase'
            },

            ...(isMobile && {
              display: { sm: 'block', xs: 'none' }
            })
          }}
        >
          <Typography variant="h5" color="text.primary" lineHeight={1}>
            Nextall
          </Typography>
          <Typography color="text.primary" fontSize={8.7} ml={0.1}>
            Reactjs ecommerce script you need
          </Typography>
        </Box>
      )}
    </Button>
  );
});

Logo.displayName = 'Logo';

Logo.propTypes = {
  sx: PropTypes.object,
  isMobile: PropTypes.bool,
  noText: PropTypes.bool
};
export default LogoMain;
