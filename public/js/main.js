// Cargar los archivos necesarios
console.log('hola');

const filesToLoad = [
    // 'firstFile.js',
    'secondFile.js',
    'logicForDeployProducts.js'
  ];
  
  // Función que carga los archivos
   const loadFiles = () => {
    for (const file of filesToLoad) {
      const script = document.createElement('script');
      script.src = `/js/${file}`;
      console.log(script.src);
      script.type = "text/javascript";
      document.head.appendChild(script);
    }
  }
  
  // Llamar a la función para cargar los archivos
  loadFiles();