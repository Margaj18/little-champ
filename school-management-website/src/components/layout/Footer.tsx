import styled from 'styled-components';
import { Container } from '@/components/ui/Container';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary[900]};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[12]} 0 ${({ theme }) => theme.spacing[6]};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  p {
    color: ${({ theme }) => theme.colors.secondary[300]};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary[300]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.secondary[300]};
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary[700]};
  padding-top: ${({ theme }) => theme.spacing[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.secondary[400]};
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary[400]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>Little Champ School</h3>
            <p>
              Nurturing young minds with love, care, and quality education. 
              We believe every child has the potential to be a champion in their own way.
            </p>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/who-we-are">About Us</FooterLink>
              <FooterLink href="/curriculum">Curriculum</FooterLink>
              <FooterLink href="/parents-corner">Parents Corner</FooterLink>
              <FooterLink href="/public-holidays">Holidays</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Contact Info</h3>
            <ContactInfo>
              <ContactItem>
                <span>📍</span>
                <span>123 Education Street, Learning City, LC 12345</span>
              </ContactItem>
              <ContactItem>
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </ContactItem>
              <ContactItem>
                <span>✉️</span>
                <span>info@littlechamp.edu</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>

          <FooterSection>
            <h3>Follow Us</h3>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">Facebook</SocialLink>
              <SocialLink href="#" aria-label="Instagram">Instagram</SocialLink>
              <SocialLink href="#" aria-label="Twitter">Twitter</SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">LinkedIn</SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Little Champ School. All rights reserved.
          </Copyright>
          <div>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <span style={{ margin: '0 8px' }}>•</span>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </div>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}