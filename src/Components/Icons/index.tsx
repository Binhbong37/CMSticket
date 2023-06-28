interface Props {
  className?: string,
  onClick?: () => void
}

export function HiddenIcon({ className }: Props) {
  return (
    <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path
        d='M7.87652 3.59844L8.04086 3.57324C8.35847 3.52456 8.67935 3.50034 9.00067 3.50081M7.87652 3.59844L8.99995 4.00081M7.87652 3.59844L7.72353 3.62189L7.61662 3.63827V3.77259V4.03305C7.64441 4.04606 7.67291 4.05755 7.70198 4.06747C7.7298 4.07697 7.75816 4.08502 7.78693 4.09159C7.80231 4.09509 7.81777 4.09817 7.83328 4.10081H8.11662L8.11095 4.06747L8.03282 3.60788C7.98812 3.61548 7.94235 3.6142 7.89815 3.60411C7.89087 3.60245 7.88366 3.60056 7.87652 3.59844ZM9.00067 3.50081L8.99995 4.00081M9.00067 3.50081C9.00043 3.50081 9.00019 3.50081 8.99995 3.50081V4.00081M9.00067 3.50081C11.9063 3.50115 14.5421 5.58557 16.0443 8.78849L16.1441 9.00133L16.0439 9.21398C15.8134 9.70301 15.5531 10.1774 15.2643 10.6345L15.2616 10.6388L15.2616 10.6388C15.2265 10.6932 15.2079 10.7567 15.2083 10.8214M8.99995 4.00081C11.65 4.00081 14.1416 5.90914 15.5916 9.0008C15.3699 9.4713 15.1194 9.92772 14.8416 10.3675C14.7534 10.504 14.7071 10.6633 14.7083 10.8258M15.2083 10.8214C15.2083 10.8212 15.2083 10.8209 15.2083 10.8207L14.7083 10.8258M15.2083 10.8214C15.2083 10.8216 15.2083 10.8219 15.2083 10.8221L14.7083 10.8258M15.2083 10.8214C15.2092 10.8939 15.2337 10.9641 15.2781 11.0215C15.3226 11.079 15.3848 11.1203 15.455 11.1392L15.3252 11.6221M14.7083 10.8258C14.7101 11.0077 14.7714 11.1839 14.8828 11.3277C14.9942 11.4715 15.1496 11.5748 15.3252 11.6221M15.3252 11.6221L15.455 11.1392C15.5253 11.1581 15.5998 11.1535 15.6672 11.1261C15.7346 11.0986 15.7911 11.0499 15.8283 10.9874L15.8323 10.9806L15.8365 10.974C16.21 10.3872 16.5344 9.77048 16.8064 9.13027L16.8073 9.1283C16.8252 9.08672 16.8344 9.04192 16.8344 8.99664C16.8344 8.95136 16.8252 8.90656 16.8073 8.86497L7.83328 2.43414C8.21835 2.36564 8.60884 2.33217 8.99995 2.33414C12.4166 2.33414 15.5833 4.75914 17.2666 8.66747C17.3113 8.77145 17.3344 8.88345 17.3344 8.99664C17.3344 9.10982 17.3113 9.22182 17.2666 9.32581C16.9838 9.99135 16.6466 10.6324 16.2583 11.2425C16.1655 11.3989 16.0241 11.5207 15.8556 11.5892C15.6871 11.6577 15.5009 11.6693 15.3252 11.6221ZM7.11784 9.0008H6.83328C6.83328 9.00177 6.83328 9.00274 6.83329 9.0037C6.83405 9.57729 7.06224 10.1272 7.46789 10.5329C7.87354 10.9385 8.42349 11.1667 8.9971 11.1675C9.19118 11.1694 9.38453 11.1433 9.57111 11.0898L10.387 10.8558L9.78684 10.2556L7.74517 8.21392L7.14496 7.61371L7.12032 9.00328L7.11784 9.0008ZM7.11784 9.0008L7.03806 8.92103L7.39162 8.56747L7.11784 9.0008ZM3.83837 5.0277L4.20612 4.6737L3.8446 4.31335L1.26184 1.73892C1.26176 1.73884 1.26169 1.73877 1.26161 1.73869C1.1986 1.67556 1.16321 1.59001 1.16321 1.50081C1.16321 1.4115 1.19869 1.32584 1.26184 1.26269C1.29311 1.23142 1.33023 1.20662 1.37109 1.1897C1.41194 1.17277 1.45573 1.16406 1.49995 1.16406C1.54417 1.16406 1.58796 1.17277 1.62882 1.1897C1.66967 1.20662 1.70679 1.23142 1.73806 1.26269L16.7381 16.2627L16.7395 16.2641C16.7708 16.2951 16.7956 16.332 16.8125 16.3726C16.8294 16.4132 16.8381 16.4568 16.8381 16.5008C16.8381 16.5448 16.8294 16.5884 16.8125 16.629C16.7956 16.6696 16.7708 16.7065 16.7395 16.7375L16.7366 16.7404C16.7056 16.7716 16.6688 16.7964 16.6281 16.8133C16.5875 16.8303 16.544 16.839 16.5 16.839C16.4559 16.839 16.4124 16.8303 16.3718 16.8133C16.3311 16.7964 16.2943 16.7716 16.2633 16.7404L16.2624 16.7395L13.5624 14.0311L13.2734 13.7412L12.9322 13.9673C11.765 14.7405 10.3982 15.1575 8.99829 15.1675C5.83592 15.1667 2.82038 12.9159 1.19251 9.13635L1.19154 9.13414C1.17319 9.09208 1.16371 9.04669 1.16371 9.0008C1.16371 8.95492 1.17319 8.90953 1.19154 8.86747L1.19156 8.86748L1.19324 8.86354C1.80846 7.42029 2.70805 6.11574 3.83837 5.0277ZM8.99995 14.5008V14.5008L9.00563 14.5008C10.1457 14.4878 11.2626 14.1767 12.2452 13.5984L12.8056 13.2686L12.3429 12.8117L11.0179 11.5034L10.7529 11.2417L10.4264 11.4206C9.88888 11.7151 9.2704 11.8274 8.6637 11.7406C8.05701 11.6538 7.49481 11.3727 7.06144 10.9393C6.62808 10.5059 6.34691 9.94375 6.26013 9.33705C6.17334 8.73036 6.28562 8.11188 6.58011 7.57439L6.75918 7.24757L6.49715 6.98258L5.02215 5.49091L4.67812 5.14299L4.32283 5.47941C3.32837 6.42108 2.5263 7.54696 1.96117 8.79449L1.86634 9.00383L1.96346 9.21211C3.45759 12.4163 6.09408 14.5008 8.99995 14.5008Z'
        fill='none'
        strokeWidth='#7E7D88'
      />
    </svg>
  )
}

export function ErrorIcon({ className }: Props) {
  return (
    <svg viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <g clipPath='url(#clip0_69064_3695)'>
        <path
          d='M10.228 18.8327C14.8304 18.8327 18.5613 15.1017 18.5613 10.4993C18.5613 5.89698 14.8304 2.16602 10.228 2.16602C5.62561 2.16602 1.89465 5.89698 1.89465 10.4993C1.89465 15.1017 5.62561 18.8327 10.228 18.8327Z'
          stroke='#E73F3F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.228 13.834H10.2364'
          stroke='#E73F3F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.228 7.16602V10.4993'
          stroke='#E73F3F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_69064_3695'>
          <rect width='20' height='20' fill='white' transform='translate(0.228027 0.5)' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const CopyIcon = ({ className }: Props) => (
  <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <g opacity='0.5'>
      <path
        d='M7.33332 6.00001H8.66665C8.84346 6.00001 9.01303 6.07025 9.13805 6.19527C9.26308 6.3203 9.33332 6.48987 9.33332 6.66668C9.33332 6.84349 9.40355 7.01306 9.52858 7.13808C9.6536 7.26311 9.82317 7.33334 9.99998 7.33334C10.1768 7.33334 10.3464 7.26311 10.4714 7.13808C10.5964 7.01306 10.6666 6.84349 10.6666 6.66668C10.6666 6.13624 10.4559 5.62754 10.0809 5.25246C9.70579 4.87739 9.19708 4.66668 8.66665 4.66668H7.33332C6.80288 4.66668 6.29417 4.87739 5.9191 5.25246C5.54403 5.62754 5.33332 6.13624 5.33332 6.66668V9.33334C5.33332 9.86378 5.54403 10.3725 5.9191 10.7476C6.29417 11.1226 6.80288 11.3333 7.33332 11.3333H8.66665C9.19708 11.3333 9.70579 11.1226 10.0809 10.7476C10.4559 10.3725 10.6666 9.86378 10.6666 9.33334C10.6666 9.15653 10.5964 8.98696 10.4714 8.86194C10.3464 8.73692 10.1768 8.66668 9.99998 8.66668C9.82317 8.66668 9.6536 8.73692 9.52858 8.86194C9.40355 8.98696 9.33332 9.15653 9.33332 9.33334C9.33332 9.51015 9.26308 9.67972 9.13805 9.80475C9.01303 9.92977 8.84346 10 8.66665 10H7.33332C7.1565 10 6.98694 9.92977 6.86191 9.80475C6.73689 9.67972 6.66665 9.51015 6.66665 9.33334V6.66668C6.66665 6.48987 6.73689 6.3203 6.86191 6.19527C6.98694 6.07025 7.1565 6.00001 7.33332 6.00001V6.00001ZM7.99998 1.33334C6.68144 1.33334 5.39251 1.72434 4.29618 2.45688C3.19985 3.18942 2.34537 4.23061 1.84079 5.44879C1.3362 6.66696 1.20418 8.00741 1.46141 9.30061C1.71865 10.5938 2.35359 11.7817 3.28594 12.7141C4.21829 13.6464 5.40617 14.2813 6.69938 14.5386C7.99259 14.7958 9.33303 14.6638 10.5512 14.1592C11.7694 13.6546 12.8106 12.8001 13.5431 11.7038C14.2757 10.6075 14.6666 9.31855 14.6666 8.00001C14.6666 7.12453 14.4942 6.25762 14.1592 5.44879C13.8241 4.63995 13.3331 3.90502 12.714 3.28597C12.095 2.66691 11.36 2.17584 10.5512 1.84081C9.74237 1.50578 8.87546 1.33334 7.99998 1.33334V1.33334ZM7.99998 13.3333C6.94515 13.3333 5.914 13.0205 5.03694 12.4345C4.15988 11.8485 3.47629 11.0155 3.07263 10.041C2.66896 9.06645 2.56334 7.99409 2.76913 6.95953C2.97492 5.92496 3.48287 4.97465 4.22875 4.22877C4.97463 3.48289 5.92494 2.97494 6.9595 2.76916C7.99407 2.56337 9.06642 2.66899 10.041 3.07265C11.0155 3.47632 11.8485 4.15991 12.4345 5.03697C13.0205 5.91403 13.3333 6.94518 13.3333 8.00001C13.3333 9.4145 12.7714 10.7711 11.7712 11.7712C10.771 12.7714 9.41447 13.3333 7.99998 13.3333V13.3333Z'
        fill='currentColor'
      />
    </g>
  </svg>
)

export const HomeIcon = ({ className }: Props) => (
  <svg viewBox='0 0 18 21' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path d='M17 7.00001L11 1.74001C10.45 1.24805 9.7379 0.976074 8.99997 0.976074C8.26204 0.976074 7.54999 1.24805 6.99997 1.74001L0.999973 7.00001C0.682341 7.28408 0.428873 7.63256 0.256445 8.02225C0.0840165 8.41194 -0.00341463 8.83389 -2.72762e-05 9.26001V18C-2.72762e-05 18.7957 0.316043 19.5587 0.878652 20.1213C1.44126 20.6839 2.20432 21 2.99997 21H15C15.7956 21 16.5587 20.6839 17.1213 20.1213C17.6839 19.5587 18 18.7957 18 18V9.25001C18.0019 8.82557 17.9138 8.40555 17.7414 8.01769C17.5691 7.62983 17.3163 7.28296 17 7.00001ZM11 19H6.99997V14C6.99997 13.7348 7.10533 13.4804 7.29287 13.2929C7.4804 13.1054 7.73476 13 7.99997 13H9.99997C10.2652 13 10.5195 13.1054 10.7071 13.2929C10.8946 13.4804 11 13.7348 11 14V19ZM16 18C16 18.2652 15.8946 18.5196 15.7071 18.7071C15.5195 18.8946 15.2652 19 15 19H13V14C13 13.2044 12.6839 12.4413 12.1213 11.8787C11.5587 11.3161 10.7956 11 9.99997 11H7.99997C7.20432 11 6.44126 11.3161 5.87865 11.8787C5.31604 12.4413 4.99997 13.2044 4.99997 14V19H2.99997C2.73476 19 2.4804 18.8946 2.29287 18.7071C2.10533 18.5196 1.99997 18.2652 1.99997 18V9.25001C2.00015 9.10802 2.03057 8.9677 2.08919 8.83839C2.14781 8.70907 2.2333 8.59372 2.33997 8.50001L8.33997 3.25001C8.52246 3.08969 8.75706 3.00127 8.99997 3.00127C9.24288 3.00127 9.47748 3.08969 9.65997 3.25001L15.66 8.50001C15.7666 8.59372 15.8521 8.70907 15.9108 8.83839C15.9694 8.9677 15.9998 9.10802 16 9.25001V18Z' />
  </svg>
)

export const TicketIcon = ({ className }: Props) => (
  <svg
    viewBox='0 0 20 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}>
    <path d='M7 5C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9C7.26522 9 7.51957 8.89464 7.70711 8.70711C7.89464 8.51957 8 8.26522 8 8V6C8 5.73478 7.89464 5.48043 7.70711 5.29289C7.51957 5.10536 7.26522 5 7 5ZM19 6C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6C1.26522 6 1.51957 6.10536 1.70711 6.29289C1.89464 6.48043 2 6.73478 2 7C2 7.26522 1.89464 7.51957 1.70711 7.70711C1.51957 7.89464 1.26522 8 1 8C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H19C19.2652 14 19.5196 13.8946 19.7071 13.7071C19.8946 13.5196 20 13.2652 20 13V9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8C18.7348 8 18.4804 7.89464 18.2929 7.70711C18.1054 7.51957 18 7.26522 18 7C18 6.73478 18.1054 6.48043 18.2929 6.29289C18.4804 6.10536 18.7348 6 19 6ZM18 4.18C17.4208 4.3902 16.9205 4.77363 16.5668 5.27816C16.2132 5.7827 16.0235 6.38388 16.0235 7C16.0235 7.61612 16.2132 8.2173 16.5668 8.72184C16.9205 9.22637 17.4208 9.6098 18 9.82V12H8C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12H2V9.82C2.57915 9.6098 3.07954 9.22637 3.43316 8.72184C3.78678 8.2173 3.97648 7.61612 3.97648 7C3.97648 6.38388 3.78678 5.7827 3.43316 5.27816C3.07954 4.77363 2.57915 4.3902 2 4.18V2H6C6 2.26522 6.10536 2.51957 6.29289 2.70711C6.48043 2.89464 6.73478 3 7 3C7.26522 3 7.51957 2.89464 7.70711 2.70711C7.89464 2.51957 8 2.26522 8 2H18V4.18Z' />
  </svg>
)

export const ListIcon = ({ className }: Props) => (
  <svg viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path d='M11 15H5.00001C4.73479 15 4.48044 15.1054 4.2929 15.2929C4.10537 15.4804 4.00001 15.7348 4.00001 16C4.00001 16.2652 4.10537 16.5196 4.2929 16.7071C4.48044 16.8947 4.73479 17 5.00001 17H11C11.2652 17 11.5196 16.8947 11.7071 16.7071C11.8947 16.5196 12 16.2652 12 16C12 15.7348 11.8947 15.4804 11.7071 15.2929C11.5196 15.1054 11.2652 15 11 15ZM7.00001 9.00001H9.00001C9.26522 9.00001 9.51958 8.89465 9.70711 8.70711C9.89465 8.51958 10 8.26522 10 8.00001C10 7.73479 9.89465 7.48044 9.70711 7.2929C9.51958 7.10536 9.26522 7.00001 9.00001 7.00001H7.00001C6.73479 7.00001 6.48044 7.10536 6.2929 7.2929C6.10537 7.48044 6.00001 7.73479 6.00001 8.00001C6.00001 8.26522 6.10537 8.51958 6.2929 8.70711C6.48044 8.89465 6.73479 9.00001 7.00001 9.00001ZM19 11H16V2.00001C16.0007 1.8238 15.9548 1.65053 15.867 1.49775C15.7792 1.34498 15.6526 1.21811 15.5 1.13001C15.348 1.04224 15.1755 0.996033 15 0.996033C14.8245 0.996033 14.652 1.04224 14.5 1.13001L11.5 2.85001L8.50001 1.13001C8.34799 1.04224 8.17554 0.996033 8.00001 0.996033C7.82447 0.996033 7.65203 1.04224 7.50001 1.13001L4.50001 2.85001L1.50001 1.13001C1.34799 1.04224 1.17554 0.996033 1.00001 0.996033C0.824471 0.996033 0.652027 1.04224 0.500008 1.13001C0.347404 1.21811 0.220789 1.34498 0.132986 1.49775C0.0451828 1.65053 -0.000691685 1.8238 7.88288e-06 2.00001V18C7.88288e-06 18.7957 0.316078 19.5587 0.878688 20.1213C1.4413 20.6839 2.20436 21 3.00001 21H17C17.7957 21 18.5587 20.6839 19.1213 20.1213C19.6839 19.5587 20 18.7957 20 18V12C20 11.7348 19.8947 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11ZM3.00001 19C2.73479 19 2.48044 18.8947 2.2929 18.7071C2.10536 18.5196 2.00001 18.2652 2.00001 18V3.73001L4.00001 4.87001C4.15435 4.95062 4.32589 4.99272 4.50001 4.99272C4.67413 4.99272 4.84567 4.95062 5.00001 4.87001L8.00001 3.15001L11 4.87001C11.1543 4.95062 11.3259 4.99272 11.5 4.99272C11.6741 4.99272 11.8457 4.95062 12 4.87001L14 3.73001V18C14.0027 18.3412 14.0636 18.6793 14.18 19H3.00001ZM18 18C18 18.2652 17.8947 18.5196 17.7071 18.7071C17.5196 18.8947 17.2652 19 17 19C16.7348 19 16.4804 18.8947 16.2929 18.7071C16.1054 18.5196 16 18.2652 16 18V13H18V18ZM11 11H5.00001C4.73479 11 4.48044 11.1054 4.2929 11.2929C4.10537 11.4804 4.00001 11.7348 4.00001 12C4.00001 12.2652 4.10537 12.5196 4.2929 12.7071C4.48044 12.8947 4.73479 13 5.00001 13H11C11.2652 13 11.5196 12.8947 11.7071 12.7071C11.8947 12.5196 12 12.2652 12 12C12 11.7348 11.8947 11.4804 11.7071 11.2929C11.5196 11.1054 11.2652 11 11 11Z' />
  </svg>
)

export const SettingIcon = ({ className }: Props) => (
  <svg viewBox='0 0 21 22' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path d='M18.9 11.66C18.7397 11.4775 18.6513 11.2429 18.6513 11C18.6513 10.7571 18.7397 10.5225 18.9 10.34L20.18 8.9C20.3211 8.74267 20.4087 8.54471 20.4302 8.33451C20.4518 8.12431 20.4062 7.91269 20.3 7.73L18.3 4.27C18.1949 4.08752 18.0349 3.94288 17.8428 3.85669C17.6506 3.7705 17.4362 3.74716 17.23 3.79L15.35 4.17C15.1108 4.21943 14.8618 4.17959 14.6499 4.058C14.438 3.93641 14.278 3.74149 14.2 3.51L13.59 1.68C13.5229 1.48138 13.3951 1.30887 13.2246 1.18684C13.0542 1.06482 12.8497 0.999461 12.64 1H8.64002C8.42195 0.98862 8.20615 1.04893 8.02558 1.17172C7.84501 1.2945 7.7096 1.47302 7.64002 1.68L7.08002 3.51C7.00202 3.74149 6.84199 3.93641 6.63013 4.058C6.41827 4.17959 6.16924 4.21943 5.93002 4.17L4.00002 3.79C3.80457 3.76238 3.60532 3.79322 3.42737 3.87864C3.24941 3.96406 3.10072 4.10023 3.00002 4.27L1.00002 7.73C0.891178 7.91065 0.84224 8.12109 0.860201 8.33123C0.878161 8.54136 0.962101 8.74044 1.10002 8.9L2.37002 10.34C2.53034 10.5225 2.61875 10.7571 2.61875 11C2.61875 11.2429 2.53034 11.4775 2.37002 11.66L1.10002 13.1C0.962101 13.2596 0.878161 13.4586 0.860201 13.6688C0.84224 13.8789 0.891178 14.0894 1.00002 14.27L3.00002 17.73C3.10512 17.9125 3.26514 18.0571 3.45727 18.1433C3.6494 18.2295 3.86384 18.2528 4.07002 18.21L5.95002 17.83C6.18924 17.7806 6.43827 17.8204 6.65013 17.942C6.86199 18.0636 7.02202 18.2585 7.10002 18.49L7.71002 20.32C7.7796 20.527 7.91501 20.7055 8.09558 20.8283C8.27615 20.9511 8.49195 21.0114 8.71002 21H12.71C12.9197 21.0005 13.1242 20.9352 13.2946 20.8132C13.4651 20.6911 13.5929 20.5186 13.66 20.32L14.27 18.49C14.348 18.2585 14.508 18.0636 14.7199 17.942C14.9318 17.8204 15.1808 17.7806 15.42 17.83L17.3 18.21C17.5062 18.2528 17.7206 18.2295 17.9128 18.1433C18.1049 18.0571 18.2649 17.9125 18.37 17.73L20.37 14.27C20.4762 14.0873 20.5218 13.8757 20.5002 13.6655C20.4787 13.4553 20.3911 13.2573 20.25 13.1L18.9 11.66ZM17.41 13L18.21 13.9L16.93 16.12L15.75 15.88C15.0298 15.7328 14.2806 15.8551 13.6446 16.2238C13.0086 16.5925 12.5302 17.1818 12.3 17.88L11.92 19H9.36002L9.00002 17.86C8.76987 17.1618 8.2914 16.5725 7.65542 16.2038C7.01945 15.8351 6.27024 15.7128 5.55002 15.86L4.37002 16.1L3.07002 13.89L3.87002 12.99C4.36197 12.44 4.63395 11.7279 4.63395 10.99C4.63395 10.2521 4.36197 9.54002 3.87002 8.99L3.07002 8.09L4.35002 5.89L5.53002 6.13C6.25024 6.27722 6.99945 6.15488 7.63542 5.7862C8.2714 5.41752 8.74987 4.82816 8.98002 4.13L9.36002 3H11.92L12.3 4.14C12.5302 4.83816 13.0086 5.42752 13.6446 5.7962C14.2806 6.16488 15.0298 6.28722 15.75 6.14L16.93 5.9L18.21 8.12L17.41 9.02C16.9236 9.56876 16.655 10.2767 16.655 11.01C16.655 11.7433 16.9236 12.4512 17.41 13ZM10.64 7C9.84889 7 9.07553 7.2346 8.41774 7.67412C7.75994 8.11365 7.24725 8.73836 6.9445 9.46927C6.64175 10.2002 6.56254 11.0044 6.71688 11.7804C6.87122 12.5563 7.25218 13.269 7.81159 13.8284C8.371 14.3878 9.08373 14.7688 9.85966 14.9231C10.6356 15.0775 11.4398 14.9983 12.1708 14.6955C12.9017 14.3928 13.5264 13.8801 13.9659 13.2223C14.4054 12.5645 14.64 11.7911 14.64 11C14.64 9.93914 14.2186 8.92172 13.4684 8.17157C12.7183 7.42143 11.7009 7 10.64 7ZM10.64 13C10.2445 13 9.85778 12.8827 9.52888 12.6629C9.19998 12.4432 8.94363 12.1308 8.79226 11.7654C8.64088 11.3999 8.60128 10.9978 8.67845 10.6098C8.75562 10.2219 8.9461 9.86549 9.2258 9.58579C9.50551 9.30608 9.86188 9.1156 10.2498 9.03843C10.6378 8.96126 11.0399 9.00087 11.4054 9.15224C11.7708 9.30362 12.0832 9.55996 12.303 9.88886C12.5227 10.2178 12.64 10.6044 12.64 11C12.64 11.5304 12.4293 12.0391 12.0542 12.4142C11.6792 12.7893 11.1705 13 10.64 13Z' />
  </svg>
)

export const LogoutIcon = ({ className }: Props) => {
  return (
    <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path
        d='M13.3333 14.1663L17.5 9.99967L13.3333 5.83301'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.5 10H7.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const MailIcon = ({ className }: Props) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <g opacity='0.8'>
      <path
        d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 6L12 13L2 6'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
)

export const BellIcon = ({ className }: Props) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <g opacity='0.8'>
      <path
        d='M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
)

export const CalendarIcon = ({ className }: Props) => {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18C10.1978 18 10.3911 17.9414 10.5556 17.8315C10.72 17.7216 10.8482 17.5654 10.9239 17.3827C10.9996 17.2 11.0194 16.9989 10.9808 16.8049C10.9422 16.6109 10.847 16.4327 10.7071 16.2929C10.5673 16.153 10.3891 16.0578 10.1951 16.0192C10.0011 15.9806 9.80004 16.0004 9.61732 16.0761C9.43459 16.1518 9.27841 16.28 9.16853 16.4444C9.05865 16.6089 9 16.8022 9 17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18ZM15 18C15.1978 18 15.3911 17.9414 15.5556 17.8315C15.72 17.7216 15.8482 17.5654 15.9239 17.3827C15.9996 17.2 16.0194 16.9989 15.9808 16.8049C15.9422 16.6109 15.847 16.4327 15.7071 16.2929C15.5673 16.153 15.3891 16.0578 15.1951 16.0192C15.0011 15.9806 14.8 16.0004 14.6173 16.0761C14.4346 16.1518 14.2784 16.28 14.1685 16.4444C14.0586 16.6089 14 16.8022 14 17C14 17.2652 14.1054 17.5196 14.2929 17.7071C14.4804 17.8946 14.7348 18 15 18ZM15 14C15.1978 14 15.3911 13.9414 15.5556 13.8315C15.72 13.7216 15.8482 13.5654 15.9239 13.3827C15.9996 13.2 16.0194 12.9989 15.9808 12.8049C15.9422 12.6109 15.847 12.4327 15.7071 12.2929C15.5673 12.153 15.3891 12.0578 15.1951 12.0192C15.0011 11.9806 14.8 12.0004 14.6173 12.0761C14.4346 12.1518 14.2784 12.28 14.1685 12.4444C14.0586 12.6089 14 12.8022 14 13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14ZM10 14C10.1978 14 10.3911 13.9414 10.5556 13.8315C10.72 13.7216 10.8482 13.5654 10.9239 13.3827C10.9996 13.2 11.0194 12.9989 10.9808 12.8049C10.9422 12.6109 10.847 12.4327 10.7071 12.2929C10.5673 12.153 10.3891 12.0578 10.1951 12.0192C10.0011 11.9806 9.80004 12.0004 9.61732 12.0761C9.43459 12.1518 9.27841 12.28 9.16853 12.4444C9.05865 12.6089 9 12.8022 9 13C9 13.2652 9.10536 13.5196 9.29289 13.7071C9.48043 13.8946 9.73478 14 10 14ZM17 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0C14.7348 0 14.4804 0.105357 14.2929 0.292893C14.1054 0.48043 14 0.734784 14 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V19C0 19.7956 0.316071 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V10H18V19ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H4V5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6C5.26522 6 5.51957 5.89464 5.70711 5.70711C5.89464 5.51957 6 5.26522 6 5V4H14V5C14 5.26522 14.1054 5.51957 14.2929 5.70711C14.4804 5.89464 14.7348 6 15 6C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8ZM5 14C5.19778 14 5.39112 13.9414 5.55557 13.8315C5.72002 13.7216 5.84819 13.5654 5.92388 13.3827C5.99957 13.2 6.01937 12.9989 5.98079 12.8049C5.9422 12.6109 5.84696 12.4327 5.70711 12.2929C5.56725 12.153 5.38907 12.0578 5.19509 12.0192C5.00111 11.9806 4.80004 12.0004 4.61732 12.0761C4.43459 12.1518 4.27841 12.28 4.16853 12.4444C4.05865 12.6089 4 12.8022 4 13C4 13.2652 4.10536 13.5196 4.29289 13.7071C4.48043 13.8946 4.73478 14 5 14ZM5 18C5.19778 18 5.39112 17.9414 5.55557 17.8315C5.72002 17.7216 5.84819 17.5654 5.92388 17.3827C5.99957 17.2 6.01937 16.9989 5.98079 16.8049C5.9422 16.6109 5.84696 16.4327 5.70711 16.2929C5.56725 16.153 5.38907 16.0578 5.19509 16.0192C5.00111 15.9806 4.80004 16.0004 4.61732 16.0761C4.43459 16.1518 4.27841 16.28 4.16853 16.4444C4.05865 16.6089 4 16.8022 4 17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18Z" fill="#FF993C" />
    </svg>
  )
}

export const SearchIcon = ({ className }: Props) => (
  <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path
      d='M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 17.5L13.875 13.875'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const FilterIcon = ({ className }: Props) => (
  <svg viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path
      d='M21 1H1L9 10.46V17L13 19V10.46L21 1Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChevronLeftIcon = ({ className }: Props) => {
  return (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path d='M15 7L9 12L15 17' fill='#FF993C' />
      <path
        d='M15 7L9 12L15 17L15 7Z'
        stroke='#FF993C'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const ChevronRightIcon = ({ className }: Props) => {
  return (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path d='M9 17L15 12L9 7' fill='#FF993C' />
      <path
        d='M9 17L15 12L9 7L9 17Z'
        stroke='#FF993C'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const DotIcon = ({ className }: Props) => {
  return (
    <svg
      width='8'
      height='9'
      viewBox='0 0 8 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx='4' cy='4.5' r='4' fill='currentColor' />
    </svg>
  )
}

export const MoreIcon = ({ className, onClick }: Props) => (
  <svg
    width='4'
    height='18'
    viewBox='0 0 4 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    onClick={onClick}
  >
    <path
      opacity='0.7'
      d='M2 4C2.39556 4 2.78224 3.8827 3.11114 3.66294C3.44004 3.44318 3.69639 3.13082 3.84776 2.76537C3.99914 2.39992 4.03874 1.99778 3.96157 1.60982C3.8844 1.22186 3.69392 0.865492 3.41421 0.585787C3.13451 0.306082 2.77814 0.115601 2.39018 0.0384303C2.00222 -0.0387401 1.60009 0.000866562 1.23463 0.152242C0.869182 0.303617 0.556825 0.559962 0.337062 0.88886C0.117299 1.21776 1.07779e-06 1.60444 1.07779e-06 2C1.07779e-06 2.53043 0.210715 3.03914 0.585788 3.41421C0.960861 3.78929 1.46957 4 2 4ZM2 14C1.60444 14 1.21776 14.1173 0.888861 14.3371C0.559963 14.5568 0.303617 14.8692 0.152242 15.2346C0.000866562 15.6001 -0.0387401 16.0022 0.0384303 16.3902C0.115601 16.7781 0.306083 17.1345 0.585788 17.4142C0.865493 17.6939 1.22186 17.8844 1.60982 17.9616C1.99778 18.0387 2.39992 17.9991 2.76537 17.8478C3.13082 17.6964 3.44318 17.44 3.66294 17.1111C3.8827 16.7822 4 16.3956 4 16C4 15.4696 3.78929 14.9609 3.41421 14.5858C3.03914 14.2107 2.53043 14 2 14ZM2 7C1.60444 7 1.21776 7.1173 0.888861 7.33706C0.559963 7.55682 0.303617 7.86918 0.152242 8.23463C0.000866562 8.60009 -0.0387401 9.00222 0.0384303 9.39018C0.115601 9.77814 0.306083 10.1345 0.585788 10.4142C0.865493 10.6939 1.22186 10.8844 1.60982 10.9616C1.99778 11.0387 2.39992 10.9991 2.76537 10.8478C3.13082 10.6964 3.44318 10.44 3.66294 10.1111C3.8827 9.78224 4 9.39556 4 9C4 8.46957 3.78929 7.96086 3.41421 7.58579C3.03914 7.21071 2.53043 7 2 7Z'
      fill='#1E0D03'
    />
  </svg>
)

export const CameraIcon = ({ className }: Props) => {
  return (
    <svg viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.85 3.75C18.3747 3.75014 18.8861 3.91536 19.3116 4.22226C19.7372 4.52916 20.0554 4.96219 20.2213 5.46L20.9 7.5H23.75C24.7446 7.5 25.6984 7.89509 26.4017 8.59835C27.1049 9.30161 27.5 10.2554 27.5 11.25V21.25C27.5 22.2446 27.1049 23.1984 26.4017 23.9017C25.6984 24.6049 24.7446 25 23.75 25H6.25C5.25544 25 4.30161 24.6049 3.59835 23.9017C2.89509 23.1984 2.5 22.2446 2.5 21.25V11.25C2.5 10.2554 2.89509 9.30161 3.59835 8.59835C4.30161 7.89509 5.25544 7.5 6.25 7.5H9.1L9.77875 5.46C9.94462 4.96199 10.263 4.52881 10.6889 4.22189C11.1147 3.91497 11.6263 3.74987 12.1512 3.75H17.8488H17.85ZM17.85 6.25H12.15L11.4713 8.29C11.3054 8.78801 10.987 9.22118 10.5611 9.52811C10.1353 9.83503 9.62366 10.0001 9.09875 10H6.25C5.91848 10 5.60054 10.1317 5.36612 10.3661C5.1317 10.6005 5 10.9185 5 11.25V21.25C5 21.5815 5.1317 21.8995 5.36612 22.1339C5.60054 22.3683 5.91848 22.5 6.25 22.5H23.75C24.0815 22.5 24.3995 22.3683 24.6339 22.1339C24.8683 21.8995 25 21.5815 25 21.25V11.25C25 10.9185 24.8683 10.6005 24.6339 10.3661C24.3995 10.1317 24.0815 10 23.75 10H20.9C20.3753 9.99986 19.8639 9.83464 19.4384 9.52774C19.0128 9.22084 18.6946 8.78781 18.5287 8.29L17.85 6.25ZM11.875 15.625C11.875 14.7962 12.2042 14.0013 12.7903 13.4153C13.3763 12.8292 14.1712 12.5 15 12.5C15.8288 12.5 16.6237 12.8292 17.2097 13.4153C17.7958 14.0013 18.125 14.7962 18.125 15.625C18.125 16.4538 17.7958 17.2487 17.2097 17.8347C16.6237 18.4208 15.8288 18.75 15 18.75C14.1712 18.75 13.3763 18.4208 12.7903 17.8347C12.2042 17.2487 11.875 16.4538 11.875 15.625ZM15 10C13.5082 10 12.0774 10.5926 11.0225 11.6475C9.96763 12.7024 9.375 14.1332 9.375 15.625C9.375 17.1168 9.96763 18.5476 11.0225 19.6025C12.0774 20.6574 13.5082 21.25 15 21.25C16.4918 21.25 17.9226 20.6574 18.9775 19.6025C20.0324 18.5476 20.625 17.1168 20.625 15.625C20.625 14.1332 20.0324 12.7024 18.9775 11.6475C17.9226 10.5926 16.4918 10 15 10Z'
        fill='currentColor'
      />
    </svg>
  )
}
export const ClockIcon = ({ className }: Props) => {
  return (
    <svg width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >

      <path
        d="M13 9H11V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10.2652 9.10536 10.5196 9.2929 10.7071C9.48043 10.8946 9.73479 11 10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
        fill="#FF993C" />
    </svg>
  )
}
export const EditIcon = ({ className }: Props) => {
  return (
    <svg width="24" height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#FF993C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#FF993C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

