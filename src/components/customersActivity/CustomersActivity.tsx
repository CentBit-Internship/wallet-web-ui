import * as CA from './styles'


type Props = {
  children: JSX.Element
};

export const CustomersActivity: React.FC<Props> = ({children}) => {
  return (
    <CA.CustomerActivityBackground>
      <CA.CustomerActivityHeader>
        <CA.CustomerActivityHeaderTitle>
          Customers Activity
        </CA.CustomerActivityHeaderTitle>

        <CA.CustomerActivityHeaderSubtitle>
          <CA.CustomerActivityDot>.</CA.CustomerActivityDot>
          <CA.CustomerActivityDot>.</CA.CustomerActivityDot>
          <CA.CustomerActivityDot>.</CA.CustomerActivityDot>
        </CA.CustomerActivityHeaderSubtitle>
      </CA.CustomerActivityHeader>

      <CA.CustomerActivityContent>
        {children}
      </CA.CustomerActivityContent>

    </CA.CustomerActivityBackground>
  )
}

