import React from 'react'

export default function Icons(props) {
  switch(props.icon) {
    case 'diary':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox= "0 0 64 64"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
              <g>
              <path d="M57.015,0h-4.029C51.339,0,50,1.339,50,2.985V7v6v37.266l4,7V59c0,0.553,0.447,1,1,1s1-0.447,1-1v-1.734l4-7V13V7V2.985C60,1.339,58.661,0,57.015,0z M52,9h6v2h-6V9z M55,54.984L52.723,51h4.554L55,54.984z M58,49h-6V13h6V49z M52,7V2.985C52,2.442,52.442,2,52.985,2h4.029C57.558,2,58,2.442,58,2.985V7H52z"/>
              <path d="M0,0v60h10h36V0H10H0z M2,58V2h6v56H2z M44,2v56H10V2H44z"/>
              <path d="M39,24V10H15v14H39z M17,12h20v10H17V12z"/>
              </g>
              </svg>
        </div>)
    case 'analysis':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox= "0 0 64 64"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
              <g>
              <path d="m70.063 67.918h-62.044a1 1 0 0 1 -1-1v-63.918a1 1 0 0 1 2 0v62.918h61.044a1 1 0 0 1 0 2z"/>
              <path d="m12.1 8.812a1 1 0 0 1 -.764-.353l-3.317-3.913-3.319 3.913a1 1 0 0 1 -1.526-1.293l4.082-4.813a1.035 1.035 0 0 1 1.525 0l4.082 4.813a1 1 0 0 1 -.763 1.646z"/>
              <path d="m65.251 72a1 1 0 0 1 -.647-1.763l3.913-3.319-3.917-3.318a1 1 0 1 1 1.3-1.526l4.813 4.082a1 1 0 0 1 0 1.525l-4.813 4.082a1 1 0 0 1 -.649.237z"/>
              <path d="m22.844 61.607h-7.007a1 1 0 0 1 -1-1v-25.139a1 1 0 0 1 2 0v24.139h5.007v-27.773a1 1 0 1 1 2 0v28.773a1 1 0 0 1 -1 1z"/>
              <path d="m35.1 61.607h-7a1 1 0 0 1 -1-1v-39.077a1 1 0 0 1 2 0v38.077h5v-44.342a1 1 0 0 1 2 0v45.342a1 1 0 0 1 -1 1z"/>
              <path d="m47.356 61.607h-7a1 1 0 0 1 -1-1v-39.058a1 1 0 0 1 2.005 0 .827.827 0 0 1 -.005.1v37.958h5v-24.207a1 1 0 0 1 2 0v25.207a1 1 0 0 1 -1 1z"/>
              <path d="m59.617 61.607h-7.007a1 1 0 0 1 -1-1v-17.833a1 1 0 0 1 2 0v16.833h5.007v-13.7a1 1 0 0 1 2 0v14.7a1 1 0 0 1 -1 1z"/>
              <path d="m63.147 47.378h-.08c-4.694-.371-8.093-1.484-10.7-3.5-3.058-2.373-4.841-5.908-6.413-9.027l-7.18-14.251a13 13 0 0 0 -2-3.181 3.668 3.668 0 0 0 -2.8-1.277c-1.461.118-2.64 1.547-3.373 2.725a36.678 36.678 0 0 0 -2.659 5.615c-.421 1.036-.858 2.107-1.339 3.147-1.8 3.893-3.971 6.442-6.632 7.795a10.484 10.484 0 0 1 -8.214.414 1 1 0 0 1 .688-1.878 8.444 8.444 0 0 0 6.62-.319c2.245-1.141 4.117-3.382 5.723-6.851.462-1 .889-2.047 1.3-3.061a38.529 38.529 0 0 1 2.812-5.92c1.418-2.282 3.071-3.514 4.91-3.662a5.566 5.566 0 0 1 4.406 1.887 14.731 14.731 0 0 1 2.344 3.666l7.182 14.249c1.477 2.93 3.151 6.251 5.853 8.346 2.282 1.769 5.342 2.75 9.63 3.089a1 1 0 0 1 -.078 2z"/>
              </g>
              </svg>
        </div>)
    case 'add':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
              <g>
              <path  d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"/>
              </g>
              </svg>
        </div>)
    case 'frequent':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox="0 0 551.3 551.3"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
              <g>
              <path d="m275.531 172.228-.05 120.493c0 4.575 1.816 8.948 5.046 12.177l86.198 86.181 24.354-24.354-81.153-81.136.05-113.361z"/><path d="m310.011 34.445c-121.23 0-221.563 90.033-238.367 206.674h-71.644l86.114 86.114 86.114-86.114h-65.78c16.477-97.589 101.355-172.228 203.563-172.228 113.966 0 206.674 92.707 206.674 206.674s-92.707 206.674-206.674 206.674c-64.064 0-123.469-28.996-162.978-79.555l-27.146 21.192c46.084 58.968 115.379 92.808 190.124 92.808 132.955 0 241.119-108.181 241.119-241.119s-108.164-241.119-241.119-241.12z"/>
              </g>
              </svg>
        </div>)
    case 'more':
        return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
<g>
	<g>
		<path d="M64,192c-35.285,0-64,28.715-64,64s28.715,64,64,64s64-28.715,64-64S99.285,192,64,192z M64,298.667
			c-23.531,0-42.667-19.136-42.667-42.667S40.469,213.333,64,213.333c23.531,0,42.667,19.136,42.667,42.667
			S87.531,298.667,64,298.667z"/>
	</g>
</g>
<g>
	<g>
		<path d="M256,192c-35.285,0-64,28.715-64,64s28.715,64,64,64s64-28.715,64-64S291.285,192,256,192z M256,298.667
			c-23.531,0-42.667-19.136-42.667-42.667s19.136-42.667,42.667-42.667s42.667,19.136,42.667,42.667S279.531,298.667,256,298.667z"
			/>
	</g>
</g>
<g>
	<g>
		<path d="M448,192c-35.285,0-64,28.715-64,64s28.715,64,64,64c35.285,0,64-28.715,64-64S483.285,192,448,192z M448,298.667
			c-23.531,0-42.667-19.136-42.667-42.667s19.136-42.667,42.667-42.667c23.531,0,42.667,19.136,42.667,42.667
			S471.531,298.667,448,298.667z"/>
	</g>
</g>
              </svg>
        </div>)
    case 'Foods':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox="-151 0 511 512"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
              <g>
              <path d="m52.570312 303.730469c0 4.792969-3.886718 8.675781-8.679687 8.675781-4.789063 0-8.675781-3.882812-8.675781-8.675781s3.886718-8.679688 8.675781-8.679688c4.792969 0 8.679687 3.886719 8.679687 8.679688zm0 0"/>
              <path d="m52.570312 338.441406c0 4.792969-3.886718 8.675782-8.679687 8.675782-4.789063 0-8.675781-3.882813-8.675781-8.675782 0-4.792968 3.886718-8.679687 8.675781-8.679687 4.792969 0 8.679687 3.886719 8.679687 8.679687zm0 0"/>
              <path d="m174.15625 303.730469c0 4.792969-3.882812 8.675781-8.675781 8.675781s-8.679688-3.882812-8.679688-8.675781 3.886719-8.679688 8.679688-8.679688 8.675781 3.886719 8.675781 8.679688zm0 0"/>
              <path d="m174.15625 338.441406c0 4.792969-3.882812 8.675782-8.675781 8.675782s-8.679688-3.882813-8.679688-8.675782c0-4.792968 3.886719-8.679687 8.679688-8.679687s8.675781 3.886719 8.675781 8.679687zm0 0"/>
              <path d="m78.605469 0c-4.800781 0-8.679688 3.878906-8.679688 8.679688v112.8125c0 11.296874-7.28125 20.84375-17.355469 24.4375v-137.25c0-4.800782-3.878906-8.679688-8.679687-8.679688-4.796875 0-8.679687 3.878906-8.679687 8.679688v137.25c-10.074219-3.59375-17.355469-13.140626-17.355469-24.4375v-112.8125c0-4.800782-3.878907-8.679688-8.675781-8.679688-4.800782 0-8.679688 3.878906-8.679688 8.679688v112.8125c0 20.949218 14.933594 38.476562 34.710938 42.511718v88.890625c-14.925782 3.878907-26.035157 17.347657-26.035157 33.476563v190.917968c0 19.144532 15.570313 34.710938 34.710938 34.710938 19.144531 0 34.710937-15.566406 34.710937-34.710938v-190.917968c0-16.128906-11.105468-29.597656-26.03125-33.476563v-88.890625c19.777344-4.035156 34.710938-21.554687 34.710938-42.511718v-112.8125c.003906-4.800782-3.875-8.679688-8.671875-8.679688zm-17.355469 286.371094v190.917968c0 9.570313-7.785156 17.355469-17.359375 17.355469-9.570313 0-17.355469-7.785156-17.355469-17.355469v-190.917968c0-9.570313 7.785156-17.355469 17.355469-17.355469 9.574219 0 17.359375 7.785156 17.359375 17.355469zm0 0"/>
              <path d="m190.914062 14.597656c-9.769531-9.824218-23.769531-14.597656-42.789062-14.597656-4.800781 0-8.679688 3.878906-8.679688 8.679688v251.660156c0 .945312.257813 1.8125.539063 2.664062-5.667969 6.175782-9.21875 14.335938-9.21875 23.367188v190.917968c0 19.140626 15.570313 34.710938 34.710937 34.710938 19.144532 0 34.710938-15.570312 34.710938-34.710938v-190.917968c0-11.113282-5.34375-20.921875-13.5-27.28125 22.136719-28.671875 22.195312-71.082032 22.179688-132.738282l.050781-19.144531c.210937-41.410156.394531-74.117187-18.003907-92.609375zm-8.078124 462.691406c0 9.570313-7.785157 17.355469-17.359376 17.355469-9.570312 0-17.355468-7.785156-17.355468-17.355469v-190.917968c0-9.570313 7.785156-17.355469 17.355468-17.355469 9.574219 0 17.359376 7.785156 17.359376 17.355469zm8.730468-370.167968-.054687 19.238281c.019531 61.039063-.042969 101.902344-21.617188 125.75-1.457031-.191406-2.90625-.449219-4.414062-.449219-3.011719 0-5.882813.503906-8.679688 1.230469v-235.023437c9.632813 1.074218 16.863281 3.992187 21.808594 8.964843 13.300781 13.382813 13.148437 42.902344 12.957031 80.289063zm0 0"/>
              </g>
              </svg>
        </div>)
    case 'Drinks':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox="-37 0 512 512.00216"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
              <g>
                <path d="m438.605469 40.167969c.046875-.292969.035156-.609375.058593-.914063.121094-.878906.195313-1.769531.195313-2.683594 0-13.261718-11.691406-22.308593-71.460937-29.34375-39.605469-4.652343-92.144532-7.226562-147.964844-7.226562-55.820313 0-108.363282 2.574219-147.972656 7.230469-59.765626 7.03125-71.460938 16.078125-71.460938 29.34375 0 .898437.0742188 1.777343.183594 2.644531.039062.316406.023437.644531.074218.953125l15.371094 184.269531c0 .050782-.011718.097656 0 .148438l16.3125 195.691406c.011719.085938.046875.160156.058594.234375l4.570312 54.917969c0 12.871094 11.15625 21.792968 68.160157 29.316406 34.351562 4.53125 77.238281 7.253906 114.699219 7.253906 37.460937 0 80.347656-2.722656 114.699218-7.253906 57.003906-7.523438 68.160156-16.457031 68.109375-28.308594l21.054688-252.609375c.074219-.609375.132812-1.21875.15625-1.828125zm-393.558594 243.820312-3.5-41.921875c5.671875 1.523438 12.53125 2.949219 20.75 4.289063.5.085937 1.011719.171875 1.523437.257812 1.09375.171875 2.15625.355469 3.289063.523438-3.546875 12.023437-.960937 25.527343 8.191406 35.328125l39.074219 41.816406c6.644531 7.117188 15.699219 11.226562 25.476562 11.554688.425782.011718.851563.023437 1.28125.023437.109376 0 .207032-.023437.316407-.023437.585937 8.339843 3.789062 16.175781 9.558593 22.34375l39.070313 41.816406c7.191406 7.703125 16.957031 11.59375 26.734375 11.59375 8.945312 0 17.90625-3.269532 24.941406-9.839844l41.816406-39.070312c7.117188-6.644532 11.214844-15.703126 11.554688-25.492188.332031-9.777344-3.144531-19.078125-9.800781-26.195312l-5.851563-6.269532c6.4375-1.351562 12.398438-4.375 17.308594-8.960937l41.816406-39.070313c1.972656-1.839844 3.644532-3.863281 5.121094-5.996094 24.636719-2.441406 41.777344-5.292968 53.578125-8.449218l-13.984375 167.777344c-32.144531 8.59375-102.191406 15.261718-163.875 15.261718s-131.730469-6.667968-163.875-15.261718zm367.359375-222.9375-11.617188 139.542969c-14.25-4.265625-37.4375-7.984375-74.714843-10.875l-24.78125-26.527344c-13.777344-14.726562-36.960938-15.53125-51.6875-1.753906l-26.261719 24.527344-2.925781-.015625c-19.761719 0-39.277344.390625-58.171875 1.097656-12.386719-7.253906-28.101563-6.65625-39.949219 2.0625-43.226563 2.984375-68.9375 7.179687-84.199219 11.761719l-11.628906-139.820313c28.402344 8.140625 84.90625 12.09375 192.964844 12.09375 108.066406 0 164.554687-3.949219 192.972656-12.09375zm-335.679688 162.816407c-.277343-.039063-.570312-.074219-.851562-.113282-6.925781-.949218-12.652344-1.898437-17.359375-2.816406 8.449219-1.617188 19.6875-3.300781 34.269531-4.847656l-6.085937 5.691406-3.191407 2.960938c-.039062 0-.074218-.011719-.097656-.011719-2.351562-.277344-4.558594-.570313-6.683594-.863281zm58.796876-14.335938c2.351562-2.195312 5.339843-3.28125 8.328124-3.28125 3.265626 0 6.507813 1.292969 8.910157 3.851562l19.394531 20.761719c-20.894531-.648437-39.753906-1.683593-56.296875-2.976562l6.683594-6.238281zm100.925781-2.449219 29.792969-27.84375c2.351562-2.195312 5.339843-3.28125 8.324218-3.28125 3.269532 0 6.511719 1.292969 8.902344 3.851563l39.070312 41.824218c1 1.0625 1.65625 2.304688 2.195313 3.574219.195313.488281.351563.988281.488281 1.484375.109375.390625.121094.792969.191406 1.195313-27.71875 2.195312-62.523437 3.695312-103.957031 3.71875-.039062-.085938-.109375-.144531-.148437-.230469-.035156-.097656-.011719-.207031-.050782-.304688-1.460937-4.386718-.414062-9.410156 3.171876-12.761718zm110.992187 9.042969c14.3125 1.546875 25.332032 3.242188 33.597656 4.839844-7.484374 1.464844-17.601562 3.046875-31.183593 4.558594-.011719-.070313-.050781-.132813-.050781-.207032-.375-3.023437-1.132813-5.984375-2.265626-8.863281-.046874-.09375-.046874-.21875-.097656-.328125zm-147.625-4.609375c-.351562.746094-.632812 1.5-.9375 2.257813-.5 1.265624-.9375 2.558593-1.292968 3.863281-.230469.84375-.4375 1.683593-.609376 2.535156-.085937.414063-.230468.816406-.292968 1.246094l-10.03125-10.742188c4.507812-.097656 9.054687-.183593 13.601562-.230469-.167968.351563-.265625.71875-.4375 1.070313zm-107.335937 38.78125c35.414062 3.621094 75.558593 4.960937 101.679687 5.433594 1.804688 4.535156.84375 9.886719-2.925781 13.421875l-41.824219 39.0625c-2.351562 2.203125-5.4375 3.3125-8.730468 3.253906-3.28125-.113281-6.289063-1.476562-8.496094-3.828125l-39.070313-41.816406c-4.082031-4.386719-4.109375-10.886719-.632812-15.527344zm76.921875 74.007813 41.8125-39.074219c2.257812-2.105469 5.195312-3.253907 8.304687-3.253907h.4375c3.28125.121094 6.289063 1.476563 8.496094 3.828126l39.070313 41.816406c4.585937 4.910156 4.328124 12.640625-.585938 17.234375l-41.8125 39.074219c-2.367188 2.203124-5.507812 3.375-8.730469 3.242187-3.28125-.109375-6.289062-1.476563-8.496093-3.828125l-39.070313-41.816406c-4.585937-4.921875-4.328125-12.640625.574219-17.222656zm93.511718-46.949219-20.152343-21.5625c16.398437-.269531 39.351562-.878907 63.523437-2.28125l-26.148437 24.429687c-4.910157 4.585938-12.652344 4.316406-17.222657-.585937zm-43.480468-252.972657c85.515625 0 148.671875 5.984376 178.808594 12.191407-30.136719 6.203125-93.296876 12.1875-178.808594 12.1875-85.515625 0-148.675782-5.984375-178.8125-12.1875 30.132812-6.207031 93.292968-12.191407 178.8125-12.191407zm0 463.238282c-69.0625 0-142.789063-9.191406-158.832032-17.007813l-2.925781-35.046875c39.921875 8.902344 108.921875 14.082032 161.753907 14.082032 52.847656 0 121.867187-5.191407 161.792968-14.09375l-2.914062 35.046874c-15.957032 7.800782-89.757813 17.019532-158.875 17.019532zm0 0"/>
              </g>
              </svg>
        </div>)
    case 'Sleep':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox="0 0 383.189 383.189"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
          <g>
            <g>
              <path d="M226.384,123.658c-1.74-1.39-3.939-2.075-6.16-1.92h-33.6l31.6-35.28l2.96-3.28l1.52-1.92
                c0.528-0.742,0.958-1.549,1.28-2.4c0.363-0.917,0.552-1.894,0.56-2.88c0.223-2.333-0.933-4.583-2.96-5.76
                c-2.629-1.206-5.512-1.756-8.4-1.6h-39.28c-2.096-0.143-4.172,0.483-5.84,1.76c-1.378,1.173-2.145,2.911-2.08,4.72
                c0,2.72,0.907,4.373,2.72,4.96c2.6,0.739,5.299,1.063,8,0.96h25.6c-1.067,1.493-2.453,3.253-4.16,5.28l-6.56,7.36l-8.88,9.6
                l-10.32,11.44c-3.573,4-5.92,6.667-7.04,8c-2.54,3.085-2.224,7.618,0.72,10.32c2.11,1.59,4.726,2.357,7.36,2.16h46.72
                c2.235,0.175,4.457-0.48,6.24-1.84c1.359-1.187,2.121-2.916,2.08-4.72C228.533,126.739,227.772,124.925,226.384,123.658z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M297.184,164.538c-1.4-1.12-3.173-1.663-4.96-1.52h-26.88l25.2-28.16l2.4-2.64l1.52-1.84
                c0.429-0.592,0.778-1.237,1.04-1.92c0.303-0.737,0.466-1.523,0.48-2.32c0.201-1.867-0.706-3.68-2.32-4.64
                c-2.103-0.966-4.409-1.406-6.72-1.28h-31.68c-1.669-0.093-3.317,0.418-4.64,1.44c-1.106,0.93-1.725,2.316-1.68,3.76
                c0,2.133,0.72,3.467,2.16,4c2.082,0.577,4.242,0.82,6.4,0.72h20.48c-0.8,1.2-1.92,2.56-3.36,4.24l-5.28,5.92l-6.88,8l-8,9.12
                c-2.88,3.2-4.773,5.387-5.68,6.56c-1.885,2.418-1.643,5.868,0.56,8c1.679,1.249,3.754,1.846,5.84,1.68h37.12
                c1.774,0.142,3.538-0.37,4.96-1.44c1.058-0.959,1.642-2.333,1.6-3.76C298.901,166.969,298.288,165.538,297.184,164.538z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M381.104,119.578c-1.74-1.39-3.939-2.075-6.16-1.92h-33.84l31.6-35.28l2.96-3.28l1.92-2.32
                c0.528-0.742,0.958-1.549,1.28-2.4c0.363-0.917,0.552-1.894,0.56-2.88c0.223-2.333-0.933-4.583-2.96-5.76
                c-2.629-1.206-5.512-1.755-8.4-1.6h-39.68c-2.096-0.143-4.172,0.483-5.84,1.76c-1.378,1.173-2.145,2.911-2.08,4.72
                c0,2.72,0.907,4.373,2.72,4.96c2.6,0.739,5.299,1.063,8,0.96h25.6c-1.067,1.493-2.453,3.253-4.16,5.28l-6.64,7.52l-8.64,9.6
                l-10.32,11.44c-3.573,4-5.92,6.667-7.04,8c-2.54,3.085-2.224,7.618,0.72,10.32c2.11,1.59,4.726,2.357,7.36,2.16h46.64
                c2.258,0.284,4.541-0.287,6.4-1.6c1.359-1.187,2.121-2.916,2.08-4.72C383.253,122.659,382.492,120.845,381.104,119.578z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M353.504,254.298c-2.279-2.359-5.767-3.089-8.8-1.84c-86.708,35.894-186.097-5.298-221.992-92.007
                c-18.227-44.031-17.127-93.693,3.032-136.873c1.889-3.994,0.182-8.763-3.812-10.652c-2.05-0.97-4.416-1.023-6.508-0.148
                C20.363,51.827-25.044,160.545,14.005,255.606s147.767,140.468,242.829,101.419c43.356-17.81,78.394-51.325,98.111-93.848
                C356.332,260.203,355.761,256.682,353.504,254.298z M186.224,355.098c-93.977-0.016-170.147-76.212-170.131-170.189
                c0.01-61.708,33.428-118.574,87.331-148.611c-6.383,18.946-9.626,38.808-9.6,58.8c0.005,102.813,83.356,186.156,186.169,186.151
                c17.231-0.001,34.378-2.394,50.951-7.111C299.919,324.303,245.207,354.91,186.224,355.098z"/>
            </g>
          </g>
        </svg>
        </div>)
    case 'Exercise':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
              <g>
                <path d="M480.56,206.698h-7.853v-21.355c0-24.625-20.034-44.658-44.659-44.658h-11.139c-4.727-17.548-20.771-30.503-39.792-30.503
                  c-22.724,0-41.211,18.486-41.211,41.21v68.197H176.093v-68.197c0-22.724-18.487-41.21-41.21-41.21
                  c-19.02,0-35.064,12.955-39.791,30.503h-11.14c-24.625,0-44.659,20.033-44.659,44.658v21.355H31.44
                  c-17.336,0-31.44,14.105-31.44,31.44v35.609c0,17.336,14.104,31.439,31.44,31.439h7.854v21.469
                  c0,24.625,20.034,44.658,44.659,44.658h11.14c4.727,17.548,20.771,30.503,39.791,30.503c22.724,0,41.21-18.486,41.21-41.21
                  v-68.197h136.999c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-137v-42.821h159.813v126.019c0,22.724,18.487,41.21,41.211,41.21
                  c19.021,0,35.065-12.955,39.792-30.503h11.139c24.625,0,44.659-20.033,44.659-44.658v-21.469h7.853
                  c17.336,0,31.44-14.103,31.44-31.439v-35.609C512,220.802,497.896,206.698,480.56,206.698z M39.294,290.188H31.44v-0.001
                  c-9.065,0-16.44-7.375-16.44-16.439v-35.609c0-9.065,7.375-16.44,16.44-16.44h7.854V290.188z M161.093,360.607
                  c0,14.452-11.758,26.21-26.21,26.21c-14.453,0-26.21-11.758-26.21-26.21V209.283c0-4.143-3.358-7.5-7.5-7.5
                  c-4.142,0-7.5,3.357-7.5,7.5v147.032h-9.72c-16.354,0-29.659-13.305-29.659-29.658V185.342c0-16.354,13.305-29.658,29.659-29.658
                  h9.72v20.372c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5v-24.665c0-14.452,11.758-26.21,26.21-26.21
                  c14.453,0,26.21,11.758,26.21,26.21V360.607z M403.328,360.607c0,14.452-11.758,26.21-26.211,26.21s-26.211-11.758-26.211-26.21
                  V151.391c0-14.452,11.758-26.21,26.211-26.21s26.211,11.758,26.211,26.21V360.607z M457.707,326.656
                  c0,16.353-13.305,29.658-29.659,29.658h-9.72v-200.63h9.72c16.354,0,29.659,13.305,29.659,29.658V326.656z M497,273.748
                  c0,9.064-7.375,16.439-16.44,16.439h-7.853v-68.489h7.853c9.065,0,16.44,7.375,16.44,16.44V273.748z"/>
                  </g>
              </svg>
        </div>)
    case 'Symptoms':
      return (
        <div>
          <svg
            className="dib h2 w2" 
            fill="currentColor" 
            preserveAspectRatio="xMidYMid meet"
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            stroke-linejoin="round" 
            stroke-miterlimit="1.414"
            viewBox="0 0 256 256">

          </svg>
        </div>)
    case 'Energy':
      return (
        <div>
          <svg className="dib h2 w2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              stroke-linejoin="round" 
              stroke-miterlimit="1.414"
              >
              <g>
              <path d="m19.5 19h-17c-1.378 0-2.5-1.122-2.5-2.5v-10c0-1.378 1.122-2.5 2.5-2.5h17c1.378 0 2.5 1.122 2.5 2.5v.5h.491c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-.491v.5c0 1.378-1.122 2.5-2.5 2.5zm-17-14c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-1c0-.276.224-.5.5-.5h.991c.276 0 .5-.224.5-.5v-6c0-.276-.224-.5-.5-.5h-.991c-.276 0-.5-.224-.5-.5v-1c0-.827-.673-1.5-1.5-1.5z"/><path d="m12.5 16h-9c-.276 0-.5-.224-.5-.5v-8c0-.276.224-.5.5-.5h9c.276 0 .5.224.5.5v8c0 .276-.224.5-.5.5zm-8.5-1h8v-7h-8z"/>
              </g>
              </svg>
        </div>)
    default:
      // code block
  }



  
}
