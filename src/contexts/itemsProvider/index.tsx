import { createContext, useState, useEffect, useContext } from 'react';

// Exportação nomeada do contexto
export const CharacterContext = createContext({});

// Exportação nomeada do provider
export const CharacterProvider = ({ children }: any) => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        // const response = await fetch(`/api/characters?name=${searchTerm}`);
        // const data = await response.json();
        const data = null;
        setCharacters(data || []);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchTerm]);

  return (
    <CharacterContext.Provider
      value={{ characters, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

// Hook personalizado para utilizar o contexto
export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      'useCharacterContext deve ser usado dentro de um CharacterProvider'
    );
  }
  return context;
};
