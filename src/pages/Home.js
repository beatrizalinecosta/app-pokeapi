import { Link } from 'react-router-dom';
//Logo Principal
import Logo from '../images/7.svg';

function Home() {
  return (
    <div class="bg-white">
        <div class="size-full">
            <div class="relative bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24">
                <div class="mx-auto text-center lg:mx-0 lg:flex-auto ">
                    <img class="inline" src={Logo} alt="Logo Pokemon" width="800" height="800"/>
                    <p class="mt-6 text-lg/8 text-pretty text-gray-300">APP para Visualização e Customização de Pokémons</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/pokemons" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Ver Pokémons</Link>
                        <Link to="/create" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Lista Customizada</Link>
                    </div>
                </div>
                <div class="relative mt-16 h-80 lg:mt-8"></div>
            </div>
        </div>
    </div>

  );
}

export default Home;
