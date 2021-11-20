import PageContainer from '../PageContainer/PageContainer';

const About = () => {
  return (
    <PageContainer>
      <div className="text-center">
        <i
          className="far fa-address-book"
          style={{ fontSize: '50px', marginBottom: '40px', color: '#155bcc' }}
        ></i>

        <h3 className="mb-3">ABOUT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sodales volutpat orci, quis maximus sapien ullamcorper vel. Vivamus
          vulputate libero quis tellus consectetur tristique. Nunc ut est sed
          elit sollicitudin luctus eu at justo. Sed varius imperdiet molestie.
          Etiam pharetra porta elit vel ornare. Fusce quis felis finibus.
        </p>
      </div>
    </PageContainer>
  );
};

export default About;
