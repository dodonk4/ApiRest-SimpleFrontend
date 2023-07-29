const filesToLoad = [
    'filter.js',
    'logicForDeployProducts.js'
  ];

const loadFiles = () => {
  for (const file of filesToLoad) {
    const script = document.createElement('script');
    script.src = `/js/${file}`;
    console.log(script.src);
    script.type = "text/javascript";
    document.head.appendChild(script);
  }
}

loadFiles();
