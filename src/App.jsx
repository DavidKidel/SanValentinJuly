import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [
  {
    id: 1,
    description: "Mira lo que le haces a Woo",
    img: "https://media1.tenor.com/m/1G71wrvOt78AAAAd/piggysgifs-extraordinary-attorney-woo.gif"
  }
    ,
  {
    id: 2,
    description: "Si estas probando el botón está bien.",
    img: "https://media.tenor.com/URQcWYKN3ZoAAAAj/cat.gif"
  },
  {
    id: 3,
    description: "Solo me quieres hacer llorar.",
    img: "https://media.tenor.com/_ld34knbSZYAAAAj/banana.gif"
  },
  {
    id: 4,
    description: "Ese soy yo ahora",
    img: "https://media.tenor.com/uPqBfKhxLHgAAAAM/2038pok%C3%A9mon-ceo-pok%C3%A9mon.gif"
  },
  {
    id: 5,
    description: "Cómo que no",
    img: "https://media1.tenor.com/m/9pspTq5-K4kAAAAd/dog-standing-here.gif"
  },
  {
    id: 6,
    description: "Todo porque no soy esos fideos:c",
    img: "https://media1.tenor.com/m/mPoRVmC2758AAAAC/ramen.gif"
  },
  {
    id: 7,
    description: "Me hare bolita",
    img: "https://media.tenor.com/RrP0Lrf6qB0AAAAM/raccoon-ayasan.gif"
  },
  {
    id: 8,
    description: "Por favorcito",
    img: "https://media.tenor.com/CMi-K481R8QAAAAM/racoon-mapache.gif"
  },
  {
    id: 9,
    description: "Así estoy ahora",
    img: "https://media.tenor.com/VqjDy_4Mzy4AAAAj/hampter-sad.gif"
  },
  {
    id: 10,
    description: "Haces llorar a Stitch",
    img: "https://media.tenor.com/a6-122xfz4kAAAAM/sad-stitch-lilo-and-stitch.gif"
  },
  { 
  id: 11,
  description: "No me quieres? :c",
  img: "https://i.pinimg.com/originals/49/a7/3d/49a73d46519ef758c6e8a5f28df35352.gif"
}

]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center">Julianna Gálvez ¿Quieres ser mi San Valentin?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://gifdb.com/images/high/stitch-heart-flying-kiss-fobagjlzwojp4jgx.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘','✨'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-white font-bold">Gracias por decir que si 🥺❤️!</h1>
            <img src="https://media1.tenor.com/m/zEz1E3kWz20AAAAC/business-proposal-business-proposal-drama.gif" alt="" className="mx-auto" />
            <span hidden>{document.title = 'Sabia que dirias que si ❤️!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App
