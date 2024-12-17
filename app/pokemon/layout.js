import Sidebar from '@/components/Sidebar';

export default function PokemonLayout({ children }) {
  return (
    <>
      <style>{`
        .container {
          display: flex;
          font-family: Arial, sans-serif;
          width: 100%;
          height: 100vh;
        }
        .sidebar {
          width: 250px;
          background: #1e1e1e;
          padding: 20px;
          overflow: auto;
        }
        .body {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #616161;
        }
        .main{
          flexGrow: 1; 
          padding: '20px';
        }

        .sidebar {
          scrollbar-width: thin; 
          scrollbar-color: #333 #1a1a1a; 
        }

        .sidebar::-webkit-scrollbar {
          width: 8px;
        }

        .sidebar::-webkit-scrollbar-track {
          background: #1a1a1a; 
        }

        .sidebar::-webkit-scrollbar-thumb {
          background-color: #333; 
          border-radius: 4px; 
        }

        .sidebar::-webkit-scrollbar-thumb:hover {
          background-color: #555; 
        }
      `}</style>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="body">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
