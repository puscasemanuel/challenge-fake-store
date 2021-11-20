import PageContainer from '../PageContainer/PageContainer';

const Contact = () => {
  return (
    <PageContainer>
      <div className="text-center">
        <i
          className="far fa-address-book"
          style={{ fontSize: '50px', marginBottom: '40px', color: '#155bcc' }}
        ></i>
        <h3 className="mb-3">CONTACT</h3>
        <div>
          <p>droid@droid.com</p>
          <p>tel. 123 - 456 - 789 </p>
          <p>tel. 123 - 456 - 789 </p>
          <p>Cluj, Cluj-Napoca</p>
          <p>Romania</p>
        </div>
      </div>
    </PageContainer>
  );
};
export default Contact;
