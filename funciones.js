import axios from 'axios';

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

# Post

const enviarPregunta = async () => {
     try {
        const response = await axios.post('https://db-esi.vercel.app/api/preguntas', {
        pregunta: pregunta
   }
      catch (error) {
          console.error('Error al enviar la pregunta:', error);
          setMensaje('Error al enviar la pregunta');
     }};

# Users

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.get('https://db-esi.vercel.app/api/users');
            const users = response.data;

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                console.log('Login exitoso');
            } else {
                setError('Contraseña o usuario invalido');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Un error ocurrió durante el login');
        }
    };
};
