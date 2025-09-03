import styled from 'styled-components';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[50]}, ${({ theme }) => theme.colors.accent[50]});
  padding: ${({ theme }) => theme.spacing[20]} 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary[900]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.secondary[600]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
`;

const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing[20]} 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary[900]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[12]};
`;

const FeatureCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[500]}, ${({ theme }) => theme.colors.accent[500]});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing[6]};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: white;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary[900]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary[600]};
  line-height: 1.6;
`;

export default function Home() {
  const features = [
    {
      icon: '🎓',
      title: 'Quality Education',
      description: 'We provide comprehensive educational programs designed to nurture young minds and prepare them for future success.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Parent Partnership',
      description: 'We believe in strong partnerships with parents to ensure the best learning experience for every child.',
    },
    {
      icon: '🌟',
      title: 'Holistic Development',
      description: 'Our curriculum focuses on academic excellence, creativity, and character development.',
    },
    {
      icon: '🏫',
      title: 'Safe Environment',
      description: 'We maintain a secure, nurturing environment where children can learn, play, and grow with confidence.',
    },
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Welcome to Little Champ School</HeroTitle>
            <HeroSubtitle>
              Nurturing young minds with love, care, and quality education. 
              Where every child is a champion in their own way.
            </HeroSubtitle>
            <HeroButtons>
              <Button size="lg" href="/curriculum">
                Explore Our Programs
              </Button>
              <Button size="lg" variant="outline" href="/contact">
                Contact Us
              </Button>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <SectionTitle>Why Choose Little Champ?</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index} hover>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
    </>
  );
}
