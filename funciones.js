# Sopa de letras

async function agarrarPalabras() {
  try {
    const respuesta = await axios.get('https://db-esi.vercel.app/api/puzzlewords');
    puzzleWords = respuesta.data;
    window.puzzleWords = puzzleWords;
  } 
  catch (error) {
    console.error('Error al obtener las palabras:', error);
    throw error;
  }
}

agarrarPalabras();

# Memotest

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://db-esi.vercel.app')
      .then(response => {
        const imageLinks = response.data.map(item => item.img);
        setImages(imageLinks);
      })
      .catch(error => {
        console.error('Error al fetchear las imágenes:', error);
      });
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Imagen ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageList;

# Users
