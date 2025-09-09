// BackedBySection.js
import styled from 'styled-components';

const BackedBySection = () => {
  return (
    <Section>
      <h2 className="font-bold text-primary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight text-center">
        Backed by
      </h2>
      <LogosWrapper>
        
       
        <a href="https://group.softbank/en/philosophy" target="_blank" rel="noopener noreferrer">
          <svg fill="none" height="90" viewBox="0 0 154 90" width="154" xmlns="http://www.w3.org/2000/svg">
            <path d="M68.929 26.703h6.64v29.28h-6.64v-29.28Z" fill="#292B29"></path>
            <path d="M78.737 26.703h6.64v29.28h-6.64v-29.28Z" fill="#292B29"></path>
            <path d="M87.187 34.729h7.243l4.376 12.931h-7.243l-4.322-12.931Z" fill="#292B29"></path>
            <path d="M66.023 45.511c-0.1-53-.27-2.97-.81-4.32a10.635 10.635 0 0 0-2.26-3.514c-.967-.991-2.122-1.78-3.466-2.365l-1.344-.586-2.82-.879-4.428-.879-6.994 0-11.24 4.881-6.068 4.836 10.813 10.017 10.939 15.733-6.248-.094-15.5 5.963h6.548l-10.57m-6.571 4.56-4.511.012c-3.091 0-6.509-4.382-3.023-7.815 3.092-3.047 7.726-.548 7.726 3.691-.192 4.113Z" fill="#292B29"></path>
          </svg>
        </a>

        {/* Ally */}
        <a href="https://www.ally.com" target="_blank" rel="noopener noreferrer">
          {/* <img src="/text.webp" alt="Ally" className="h-12 object-contain" /> */}
        </a>

 
        <a href="https://www.citi.com" target="_blank" rel="noopener noreferrer">
          {/* <img src="/logos/citi.png" alt="Citi" className="h-12 object-contain" /> */}
        </a>

    
        <a href="https://bank.pingan.com/english/index.shtml" target="_blank" rel="noopener noreferrer">
          {/* <img src="/logos/pingan.png" alt="Ping An Bank" className="h-12 object-contain" /> */}
        </a>

   
        <a href="https://www.goldmansachs.com" target="_blank" rel="noopener noreferrer">
          {/* <img src="/logos/goldman-sachs.png" alt="Goldman Sachs" className="h-12 object-contain" /> */}
        </a>

      
        <a href="https://www.kpcb.com" target="_blank" rel="noopener noreferrer">
          {/* <img src="/logos/kpcb.png" alt="KPCB" className="h-12 object-contain" /> */}
        </a>

         
        <a href="https://www.americanexpress.com/" target="_blank" rel="noopener noreferrer">
          {/* <img src="/logos/american-express.png" alt="American Express" className="h-12 object-contain" /> */}
        </a>

      </LogosWrapper>
    </Section>
  );
};

const Section = styled.section`
  padding: 7rem 5rem;
  background: rgb(255 253 250); // Updated background color
`;

const LogosWrapper = styled.div`
  margin: auto;
  margin-top: 5rem;
  display: flex;
  max-width: 1536px;
  flex-wrap: wrap;
  justify-content: space-around; // Fixed value
  align-items: center;
  gap: 2rem;
`;

export default BackedBySection;
