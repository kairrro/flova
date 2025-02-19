export function Sparkle(color: string = "#f1f1f1", dimensions: string = "32px"){
    return `
        <svg height=${dimensions} width=${dimensions} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:${color};} </style> <g> <path class="st0" d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917 c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9 c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904 C315.08,148.422,272.014,131.551,247.355,106.9z"></path> <path class="st0" d="M407.471,304.339c-14.714-14.721-24.81-40.46-29.812-63.864c-5.011,23.404-15.073,49.142-29.803,63.872 c-14.73,14.714-40.464,24.801-63.864,29.812c23.408,5.01,49.134,15.081,63.864,29.811c14.73,14.722,24.81,40.46,29.82,63.864 c5.001-23.413,15.081-49.142,29.802-63.872c14.722-14.722,40.46-24.802,63.856-29.82 C447.939,329.14,422.201,319.061,407.471,304.339z"></path> <path class="st0" d="M146.352,354.702c-4.207,19.648-12.655,41.263-25.019,53.626c-12.362,12.354-33.968,20.82-53.613,25.027 c19.645,4.216,41.251,12.656,53.613,25.027c12.364,12.362,20.829,33.96,25.036,53.618c4.203-19.658,12.655-41.255,25.023-53.626 c12.354-12.362,33.964-20.82,53.605-25.035c-19.64-4.2-41.251-12.656-53.613-25.019 C159.024,395.966,150.555,374.351,146.352,354.702z"></path> </g> </g></svg>
    `
}

export function Loading(color: string = "#f1f1f1", dimensions: string = "32px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill=${color}>
            <circle cx="15" cy="15" r="15">
                <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                <animate attributeName="r" from="9" to="9"
                        begin="0s" dur="0.8s"
                        values="9;15;9" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="0.5" to="0.5"
                        begin="0s" dur="0.8s"
                        values=".5;1;.5" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="15" r="15">
                <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
        </svg>
    `
}

export function Clipboard(color: string = "#f1f1f1", dimensions: string = "32px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>clipboard</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-468.000000, -101.000000)" fill="#f1f1f1"> <path d="M489,117 L475,117 C474.447,117 474,116.553 474,116 C474,115.448 474.447,115 475,115 L489,115 C489.553,115 490,115.448 490,116 C490,116.553 489.553,117 489,117 L489,117 Z M489,122 L475,122 C474.447,122 474,121.553 474,121 C474,120.448 474.447,120 475,120 L489,120 C489.553,120 490,120.448 490,121 C490,121.553 489.553,122 489,122 L489,122 Z M489,127 L475,127 C474.447,127 474,126.553 474,126 C474,125.448 474.447,125 475,125 L489,125 C489.553,125 490,125.448 490,126 C490,126.553 489.553,127 489,127 L489,127 Z M477,105 L479.223,105 C479.223,103.896 480.466,103 482,103 C483.534,103 484.777,103.896 484.777,105 L487,105 L487,109 L477,109 L477,105 L477,105 Z M492,105 L489,105 L489,103 L486.307,103 C485.44,101.81 483.846,101 482,101 C480.154,101 478.56,101.81 477.693,103 L475,103 L475,105 L472,105 C469.791,105 468,106.791 468,109 L468,129 C468,131.209 469.791,133 472,133 L492,133 C494.209,133 496,131.209 496,129 L496,109 C496,106.791 494.209,105 492,105 L492,105 Z" id="clipboard" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
    `
}

export function Cancel(color: string = "#f1f1f1", dimensions: string = "20px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke=${color} fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
            <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"/>
            <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"/>
            </g>
        </svg>
    `
}

export function Tick(color: string = "#622ffc", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke=${color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"></path> 
            </g>
        </svg>
    `
}

export function Hamburger(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z" fill="#f1f1f1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="#f1f1f1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z" fill=${color}></path> </g></svg>
    `
}

export function Trash(color: string = "#ff5c5c", dimensions: string = "20px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="-6.7 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"></path> </g> </g></svg>
    `
}

export function Logo(color: string = "#622ffc", dimensions: string = "60px"){
    return `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width=${dimensions} height=${dimensions} viewBox="0 0 512 512">
            <g></g>
            <path d="M349.296 86.927l28.283 97.813 101.817-3.236-84.275 57.18 34.581 95.805-80.404-62.485-80.496 62.485 34.539-95.805-84.245-57.18 101.765 3.236z" fill="#622ffc"/>
            <path d="M228.045 387.881l51.292-142.224-125.113-84.889 151.112 4.854 42.066-145.214-68.567 108.964-246.231-7.885 203.879 138.353-83.661 231.752 194.581-151.143 119.399 47.432-119.399-92.774z" fill="#622ffc"/>
        </svg>
    `
}

export function Links(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill=${color}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/> </g> </g>
        </svg>
    `
}

export function Dashboard(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg fill=${color} height=${dimensions} width=${dimensions} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M8,12h1v1h6v-1h1v-1h1V5h-1V4h-1V3H9v1H8v1H7v6h1V12z M9,7h1V6h1V5h2v1h1v1h1v2h-1v1h-1v1h-2v-1h-1V9H9V7z"></path> <polygon points="19,16 19,15 18,15 18,14 6,14 6,15 5,15 5,16 4,16 4,21 6,21 6,18 7,18 7,17 8,17 8,16 16,16 16,17 17,17 17,18 18,18 18,21 20,21 20,16 "></polygon> </g> </g></svg>
    `
}

export function Account(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=stroke"> <g id="setting"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z" fill="#f1f1f1"></path> <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M9.60347 3.77018C9.3358 3.32423 8.77209 3.18551 8.35347 3.43457L8.34256 3.44105L6.61251 4.43096C6.06514 4.74375 5.8763 5.45289 6.1894 5.9948L5.54 6.37001L6.18888 5.99391C6.72395 6.91704 6.86779 7.92882 6.38982 8.75823C5.91192 9.58753 4.96479 9.97001 3.9 9.97001C3.26678 9.97001 2.75 10.4917 2.75 11.12V12.88C2.75 13.5084 3.26678 14.03 3.9 14.03C4.96479 14.03 5.91192 14.4125 6.38982 15.2418C6.86773 16.0711 6.72398 17.0827 6.18909 18.0058C5.87642 18.5476 6.06491 19.2561 6.6121 19.5688L8.35352 20.5654C8.77214 20.8144 9.33577 20.6758 9.60345 20.2299L9.71093 20.0442C10.2458 19.1214 11.052 18.4925 12.0087 18.4925C12.9662 18.4925 13.77 19.1219 14.3 20.0458C14.3002 20.0462 14.3004 20.0466 14.3007 20.047L14.4065 20.2298C14.6742 20.6758 15.2379 20.8145 15.6565 20.5655L15.6674 20.559L17.3975 19.5691C17.9434 19.2571 18.1351 18.5578 17.8198 18.0038C17.2858 17.0813 17.1426 16.0705 17.6202 15.2418C18.0981 14.4125 19.0452 14.03 20.11 14.03C20.7432 14.03 21.26 13.5084 21.26 12.88V11.12C21.26 10.4868 20.7384 9.97001 20.11 9.97001C19.0452 9.97001 18.0981 9.58753 17.6202 8.75824C17.1423 7.92899 17.286 6.91744 17.8208 5.99445C18.1336 5.45258 17.9451 4.74391 17.3979 4.43119L15.6565 3.43466C15.2379 3.1856 14.6742 3.32423 14.4065 3.77019L14.2991 3.95579C13.7642 4.8786 12.958 5.50751 12.0012 5.50751C11.0439 5.50751 10.2402 4.87825 9.71021 3.95455C9.70992 3.95403 9.70962 3.95352 9.70933 3.95301L9.60347 3.77018ZM7.59248 2.14193C8.75191 1.45656 10.2226 1.87704 10.8946 3.00654L10.8991 3.01421L11.0091 3.20423L11.0107 3.20701C11.3807 3.85247 11.7666 4.00751 12.0012 4.00751C12.237 4.00751 12.6259 3.85115 13.0009 3.20423C13.001 3.20412 13.0009 3.20434 13.0009 3.20423L13.1154 3.00651C13.7874 1.877 15.2581 1.45656 16.4175 2.14193L18.1421 3.12883C19.4147 3.85604 19.8463 5.48713 19.1194 6.74522L19.1189 6.74611C18.7439 7.39298 18.8028 7.8062 18.9198 8.00929C19.0369 8.21249 19.3648 8.47001 20.11 8.47001C21.5616 8.47001 22.76 9.65323 22.76 11.12V12.88C22.76 14.3317 21.5768 15.53 20.11 15.53C19.3648 15.53 19.0369 15.7875 18.9198 15.9907C18.8028 16.1938 18.7439 16.607 19.1189 17.2539L19.1212 17.2579C19.8444 18.5235 19.4157 20.1431 18.1425 20.871C18.1424 20.871 18.1426 20.8709 18.1425 20.871L16.4174 21.8581C15.258 22.5434 13.7874 22.123 13.1154 20.9935L13.1109 20.9858L13.0009 20.7958L12.9993 20.793C12.6293 20.1476 12.2434 19.9925 12.0087 19.9925C11.773 19.9925 11.3841 20.1489 11.0091 20.7958C11.009 20.7959 11.0091 20.7957 11.0091 20.7958L10.8946 20.9935C10.2226 22.123 8.75199 22.5434 7.59257 21.8581L5.8679 20.8712C5.86776 20.8711 5.86803 20.8713 5.8679 20.8712C4.59558 20.1439 4.16378 18.5128 4.8906 17.2548L4.89112 17.2539C5.26605 16.607 5.20721 16.1938 5.09018 15.9907C4.97308 15.7875 4.64521 15.53 3.9 15.53C2.43322 15.53 1.25 14.3317 1.25 12.88V11.12C1.25 9.66837 2.43322 8.47001 3.9 8.47001C4.64521 8.47001 4.97308 8.21249 5.09018 8.00929C5.20721 7.8062 5.26605 7.39298 4.89112 6.74611L4.8906 6.74522C4.16378 5.48726 4.59518 3.85639 5.86749 3.12906L7.59248 2.14193Z" fill=${color}></path> </g> </g> </g></svg>
    `
}

export function Success(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg fill=${color} width=${dimensions} height=${dimensions} viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <title>success-standard-line</title> <path class="clr-i-outline clr-i-outline-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M28,12.1a1,1,0,0,0-1.41,0L15.49,23.15l-6-6A1,1,0,0,0,8,18.53L15.49,26,28,13.52A1,1,0,0,0,28,12.1Z"/> <rect x="0" y="0" width="36" height="36" fill-opacity="0"/> </g>
        </svg>
    `
}

export function Warning(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
        </svg>
    `
}

export function Save(color: string = "#f1f1f1", dimensions: string = "20px"){
    return `
        <svg fill=${color} width=${dimensions} height=${dimensions} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#f1f1f1">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M7 12v-2l-4 3 4 3v-2h2.997A6.006 6.006 0 0 0 16 8h-2a4 4 0 0 1-3.996 4H7zM9 2H6.003A6.006 6.006 0 0 0 0 8h2a4 4 0 0 1 3.996-4H9v2l4-3-4-3v2z" fill-rule="evenodd"/> </g>
        </svg>
    `
}

export function View(color: string = "#f1f1f1", dimensions: string = "20px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9944 15.5C13.9274 15.5 15.4944 13.933 15.4944 12C15.4944 10.067 13.9274 8.5 11.9944 8.5C10.0614 8.5 8.49439 10.067 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5ZM11.9944 13.4944C11.1691 13.4944 10.5 12.8253 10.5 12C10.5 11.1747 11.1691 10.5056 11.9944 10.5056C12.8197 10.5056 13.4888 11.1747 13.4888 12C13.4888 12.8253 12.8197 13.4944 11.9944 13.4944Z" fill=${color}></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C7.18879 5 3.9167 7.60905 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C16.8112 19 20.0833 16.391 21.8107 14.5202C23.1426 13.0778 23.1426 10.9222 21.8107 9.47978C20.0833 7.60905 16.8112 5 12 5ZM3.65868 10.8366C5.18832 9.18002 7.9669 7 12 7C16.0331 7 18.8117 9.18002 20.3413 10.8366C20.9657 11.5128 20.9657 12.4872 20.3413 13.1634C18.8117 14.82 16.0331 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366Z" fill=${color}></path> </g></svg>
    `
}

export function External(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"></path> </g></svg>
    `
}

export function Donate(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"></path></g></svg>
    `
}

export function Failed(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M11.514 13c-.45 0-.688.54-.363.857l3.143 3.14-3.146 3.146c-.455.436.255 1.177.707.707L15 17.705l3.146 3.145c.452.47 1.162-.27.707-.707l-3.146-3.145 3.142-3.14c.324-.318.087-.858-.364-.858-.13.004-.253.058-.344.15L15 16.29l-3.142-3.14c-.09-.092-.214-.146-.344-.15zM2.5 8h25c.277 0 .5.223.5.5s-.223.5-.5.5h-25c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zM7 6.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zm-2 0a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zm-2 0a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zM1.5 4C.678 4 0 4.678 0 5.5v19c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-19c0-.822-.678-1.5-1.5-1.5h-27zm0 1h27c.286 0 .5.214.5.5v19c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5z"></path></g>
        </svg>
    `
}

export function Card(color: string = "#f1f1f1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M16 2H0V5H16V2Z" fill="#000000"></path> <path d="M16 7H0V14H16V7Z" fill=${color}></path> </g>
        </svg>
    `
}

export function Mastercard(dimensions: string = "38px"){
    return `
        <svg height=${dimensions} width=${dimensions} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#5286F9;" d="M488.727,66.494H256H23.273C10.42,66.494,0,76.914,0,89.767v332.466 c0,12.853,10.42,23.273,23.273,23.273H256h232.727c12.853,0,23.273-10.42,23.273-23.273V89.767 C512,76.914,501.58,66.494,488.727,66.494z"></path> <path style="fill:#FFB655;" d="M273.776,189.773c5.115,5.86,9.57,12.31,13.236,19.242c7.427,14.041,11.655,30.026,11.655,46.986 s-4.228,32.943-11.655,46.986c-3.666,6.932-8.121,13.38-13.236,19.24c-5.264,6.031-11.23,11.427-17.776,16.069 c16.454,11.664,36.523,18.553,58.182,18.553c55.608,0,100.849-45.241,100.849-100.848S369.79,155.152,314.182,155.152 c-21.659,0-41.728,6.886-58.182,18.553C262.544,178.347,268.51,183.744,273.776,189.773z"></path> <path style="fill:#D8143A;" d="M287.012,209.016c-3.666-6.934-8.121-13.382-13.236-19.242c-5.267-6.031-11.231-11.425-17.776-16.066 c-16.452-11.667-36.523-18.553-58.182-18.553c-55.608,0-100.848,45.241-100.848,100.848s45.241,100.848,100.848,100.848 c21.659,0,41.73-6.887,58.182-18.553c6.546-4.641,12.51-10.038,17.776-16.067c5.115-5.86,9.57-12.31,13.236-19.24 c7.427-14.043,11.655-30.028,11.655-46.986C298.667,239.041,294.439,223.057,287.012,209.016z"></path> <path style="fill:#3D6DEB;" d="M197.818,356.851c-55.608,0-100.848-45.241-100.848-100.848s45.241-100.848,100.848-100.848 c21.659,0,41.728,6.886,58.182,18.553V66.494H23.273C10.42,66.494,0,76.914,0,89.767v332.466c0,12.853,10.42,23.273,23.273,23.273 H256v-107.21C239.546,349.962,219.477,356.851,197.818,356.851z"></path> </g></svg>
    `
}