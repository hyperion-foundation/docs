import { 
    ChatAlt2Icon,
    CodeIcon,
    HeartIcon,
    ShoppingCartIcon,
    CubeTransparentIcon
 } from '@heroicons/react/solid'

 const features = [
    {
        name: 'Discussion',
        icon: ChatAlt2Icon,
    },
    {
        name: 'Coding',
        icon: CodeIcon,
    },
    {
        name: 'Gaming',
        icon: HeartIcon,
    },
    {
        name: 'Store',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Projects',
        icon: CubeTransparentIcon,
    },
 ]

 function CommunityFeatures() {
    <>
     <div className='grid grid-cols-2 gap-6 my-12 sm:grid-cols-3 '>
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className='flex items-center space-x-4'
            key={feature.name.split(' ').join('-')}
          >
            <div>
              <Icon
                className='block w-8 h-8'
                style={{ height: 24, width: 24 }}
                aria-hidden='true'
              />
            </div>
            <div>
              <div className='my-0 font-medium dark:text-white'>
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
 }

 export default CommunityFeatures