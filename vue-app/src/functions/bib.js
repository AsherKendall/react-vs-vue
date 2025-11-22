import { Cite } from '@citation-js/core'
import '@citation-js/plugin-bibtex'
import '@citation-js/plugin-csl'

const rawEntries = `
  @INPROCEEDINGS{ComparWebRend,
  author={Diniz-Junior, Raimundo N.V. and Figueiredo, Caio César L. and De S.Russo, Gilson and Bahiense-Junior, Marcos Roberto G. and Arbex, Mateus V.L. and Dos Santos, Lanier M. and Da Rocha, Raimundo F. and Bezerra, Renan R. and Giuntini, Felipe T.},
  booktitle={2022 XVLIII Latin American Computer Conference (CLEI)}, 
  title={Evaluating the performance of web rendering technologies based on JavaScript: Angular, React, and Vue}, 
  year={2022},
  volume={},
  number={},
  pages={1-9},
  keywords={Performance evaluation;Toy manufacturing industry;Benchmark testing;Rendering (computer graphics);Software;Libraries;Mobile applications;Web rendering frameworks;incremental and virtual DOM;front-end;React;Vue;Angular;benchmark;performance avalution;web development;JavaScript},
  doi={10.1109/CLEI56649.2022.9959901}}



@ARTICLE{RendPerf,
  author={Ollila, Risto and Mäkitalo, Niko and Mikkonen, Tommi},
  journal={Journal of Web Engineering}, 
  title={Modern Web Frameworks: A Comparison of Rendering Performance}, 
  year={2022},
  volume={21},
  number={3},
  pages={789-813},
  keywords={Performance evaluation;Costs;Runtime;Web pages;Benchmark testing;User interfaces;Rendering (computer graphics);Web framework performance;declarative rendering;virtual DOM;frontend frameworks;single-page application frameworks;angular;react;vue;svelte;blazor},
  doi={10.13052/jwe1540-9589.21311}}

@INPROCEEDINGS{PerfJava,
  author={Tong, Jason and Jikson, Ricky Rivaldo and Gunawan, Alexander Agung Santoso},
  booktitle={2023 3rd International Conference on Electronic and Electrical Engineering and Intelligent System (ICE3IS)}, 
  title={Comparative Performance Analysis of Javascript Frontend Web Frameworks}, 
  year={2023},
  volume={},
  number={},
  pages={81-86},
  keywords={Electrical engineering;Computer languages;Buildings;Benchmark testing;Rendering (computer graphics);Performance analysis;Browsers;JavaScript;Front-end Framework;React.js;Vue.js;Next.js},
  doi={10.1109/ICE3IS59323.2023.10335250}}


@INPROCEEDINGS{Hooks,
  author={Sianandar, Jason and Kerthyayana Manuaba, Ida Bagus},
  booktitle={2022 International Conference on Information Management and Technology (ICIMTech)}, 
  title={Performance Analysis of Hooks Functionality in React and Vue Frameworks}, 
  year={2022},
  volume={},
  number={},
  pages={139-143},
  keywords={Buildings;Prototypes;Focusing;Libraries;Data models;Performance analysis;Information management;react;vue;hooks;front-End;performance},
  doi={10.1109/ICIMTech55957.2022.9915183}}


% State
  
@INPROCEEDINGS{BackEndState,
  author={Donvir, Anujkumarsinh and Saraswathi, Pradeep Kumar and Jain, Apeksha},
  booktitle={2024 IEEE 15th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON)}, 
  title={End-to-End Application and Backend State Management: A Comprehensive Review}, 
  year={2024},
  volume={},
  number={},
  pages={31-43},
  keywords={Fault tolerance;Reviews;Scalability;Fault tolerant systems;Mobile communication;Libraries;Mobile applications;Complexity theory;Servers;Research and development;Application State Management (ASM);Distributed Systems;Modern Web Application Development;React State Management;Redux vs MobX;Server-Side State Management},
  doi={10.1109/UEMCON62879.2024.10754779}}

@INPROCEEDINGS{ReactState,
  author={Qianqian, Lang and Yuxiao, Dai},
  booktitle={2023 International Conference on Applied Physics and Computing (ICAPC)}, 
  title={A Comprehensive Study on State Management Patterns of React}, 
  year={2023},
  volume={},
  number={},
  pages={769-772},
  keywords={Computer architecture;Complexity theory;Physics;React;MVC;Flux;Redux},
  doi={10.1109/ICAPC61546.2023.00150}}



% Data
@INPROCEEDINGS{Trends,
  author={Uppal, Tanya and Srivastava, Saumitya and Saini, Kavita},
  booktitle={2022 4th International Conference on Advances in Computing, Communication Control and Networking (ICAC3N)}, 
  title={Web Development Framework : Future Trends}, 
  year={2022},
  volume={},
  number={},
  pages={2181-2184},
  keywords={Market research;Libraries;Faces;Front-End;E-Commerce;JavaScript;Framework;HTML;DOM},
  doi={10.1109/ICAC3N56670.2022.10074105}}


@INPROCEEDINGS{ComparPopWeb,
  author={Kaur, Gursheen and Tiwari, Raj Gaurang},
  booktitle={2023 4th International Conference on Electronics and Sustainable Communication Systems (ICESC)}, 
  title={Comparison and Analysis of Popular Frontend Frameworks and Libraries: An Evaluation of Parameters for Frontend Web Development}, 
  year={2023},
  volume={},
  number={},
  pages={1067-1073},
  keywords={Knowledge engineering;Communication systems;Scalability;Ecosystems;Programming;Libraries;User experience;Frontend Web Development;Popular Frontend Frameworks and Libraries;Parameters;Evaluation;Comparison;Analysis},
  doi={10.1109/ICESC57686.2023.10192987}}


% Docs
@misc{VueRendering, 
  author={{Vue Developers}},
  title = {Rendering Mechanism},
  url={https://vuejs.org/guide/extras/rendering-mechanism},
  howpublished = {Online},
  journal={Vue.js - The Progressive JavaScript Framework | Vue.js},
  publisher={Vue},
  year={2024}} 



@misc{ReactClass, 
  author={{React Developers}},
  title = {Component - React},
  url={https://react.dev/reference/react/Component},
  howpublished = {Online},
  journal={React},
  publisher={React},
  year={2025}} 



@misc{SingleSpa, 
  author={{single-spa Developers}},
  title = {The Reccommended Setup | single-spa},
  url={https://single-spa.js.org/docs/recommended-setup/},
  howpublished = {Online},
  journal={singel-spa},
  publisher={single-spa},
  year={2025}} 


@misc{createVite, 
  author={{create-vite Developers}},
  title = {create-vite - npm},
  url={https://www.npmjs.com/package/create-vite},
  howpublished = {Online},
  journal={npm},
  publisher={npm},
  year={2025}} 



@misc{vueRouter, 
  author={{Vue Developers}},
  title = {Different History Mode | Vue Router},
  url={https://router.vuejs.org/guide/essentials/history-mode.html},
  howpublished = {Online},
  journal={Vue Router | The official Router for Vue.js},
  publisher={Vue Router},
  year={2025}} 

  
  @misc{vueProvideIn, 
  author={{Vue Developers}},
  title = {Provide / Inject| Vue.js},
  url={https://vuejs.org/guide/components/provide-inject},
  howpublished = {Online},
  journal={Vue.js - The Progressive JavaScript Framework | Vue.js},
  publisher={Vue},
  year={2025}}
  
  @misc{reactUseMemo, 
  author={{React Developers}},
  title = {useMemo - React},
  url={https://react.dev/reference/react/useMemo},
  howpublished = {Online},
  journal={React},
  publisher={React},
  year={2025}}
  
  @misc{reactMemo, 
  author={{React Developers}},
  title = {memo - React},
  url={https://react.dev/reference/react/memo},
  howpublished = {Online},
  journal={React},
  publisher={React},
  year={2025}}
  
  @misc{reactUseContext, 
  author={{React Developers}},
  title = {useContext - React},
  url={https://react.dev/reference/react/useContext},
  howpublished = {Online},
  journal={React},
  publisher={React},
  year={2025}}
  
  @misc{reactCompiler, 
  author={{React Developers}},
  title = {React Compiler - React},
  url={https://react.dev/learn/react-compiler},
  howpublished = {Online},
  journal={React},
  publisher={React},
  year={2025}}
  
  @misc{iReactCompiler,
  author = {Makarevich, Nadia},
  title = {I tried React Compiler today, and guess what...},
  howpublished = {\\url{https://www.developerway.com/posts/i-tried-react-compiler}},
  year = {2024},
  note = {Accessed: November 22, 2025}
}
  
@misc{krausestInteractiveResults,
	author = {Krause, Stefan},
	title = {{I}nteractive {R}esults --- krausest.github.io},
	howpublished = {\\url{https://krausest.github.io/js-framework-benchmark/2025/table_chrome_142.0.7444.60.html}},
	year = {2025},
	note = {[Accessed 22-11-2025]},
}
  
@misc{vueReactivity, 
  author={{Vue Developers}},
  title = {Reactivity in Depth | Vue.js},
  url={https://vuejs.org/guide/extras/reactivity-in-depth.html},
  howpublished = {Online},
  journal={Vue.js - The Progressive JavaScript Framework | Vue.js},
  publisher={Vue},
  year={2025}}`

// Generate formatted bibliography and index by ID

let formattedEntries = []

async function init() {
  const cite = await Cite.async(rawEntries)
  const entries = cite.data

  console.log(entries)

  formattedEntries = cite
    .format('bibliography', { nosort: true, template: 'ieee' })
    .split('\n')
    .filter(Boolean)
    .map((text, index) => ({
      id: entries[index].id,
      number: index + 1,
      text,
    }))

  console.log(formattedEntries)
}

console.log(formattedEntries)

export default {
  init,
  getCitationNumber(id) {
    const item = formattedEntries.find((e) => e.id === id)
    return `[${item ? item.number : '?'}]`
  },
  getCitationNumbers(ids) {
    const items = ids.map((id) => formattedEntries.find((e) => e.id === id))
    console.log(items)
    let processedItems = []
    for (let i = 0; i < items.length; i++) {
      processedItems.push(`[${items[i] ? items[i].number : '?'}]`)
    }
    const resultString = processedItems.join(', ')
    return resultString
  },
  getBibliography() {
    return formattedEntries
  },
}
