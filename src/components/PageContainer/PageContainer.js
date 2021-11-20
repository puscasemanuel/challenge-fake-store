import './PageContainer.css';

const PageContainer = ({ children }) => {
  return (
    <div className="center-screen text-center">
      <div
        style={{
          width: '700px',
          padding: '50px 100px',
          textAlign: 'justify',
          textJustify: 'inter-word',
          backgroundColor: '#d6d6d6',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
