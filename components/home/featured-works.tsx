import { Work } from '@/models'
import { Box, Container, Typography } from '@mui/material'
import { WorkList } from '../work'
export interface FeaturedWorksSectionProps {}

export function FeaturedWorksSection(props: FeaturedWorksSectionProps) {
  const works: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: 1390776056149,
      updatedAt: 1620776056149,
      tagList: ['Dashboard'],
      thumbnailUrl:
        'https://res.cloudinary.com/dtsbsc6r6/image/upload/v1690794825/nextjs-project/Rectangle_34_jmywut.jpg'
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: 1390776056149,
      updatedAt: 1620776056149,
      tagList: ['Illustration'],
      thumbnailUrl:
        'https://res.cloudinary.com/dtsbsc6r6/image/upload/v1690794825/nextjs-project/Rectangle_32_gmu9i7.jpg'
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: 1390776056149,
      updatedAt: 1620776056149,
      tagList: ['Typography'],
      thumbnailUrl:
        'https://res.cloudinary.com/dtsbsc6r6/image/upload/v1690794825/nextjs-project/Rectangle_30_muxtrw.jpg'
    }
  ]
  return (
    <Box component='section' mt={2.5}>
      <Container>
        <Typography variant='h5' component='h2'>
          Featured works
        </Typography>

        <WorkList works={works} loading={false} />
      </Container>
    </Box>
  )
}
