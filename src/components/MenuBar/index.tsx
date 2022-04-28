import Button from '../Button';

import {
    Container,
    Topside,
    Logo,
    MenuButton, 
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileDada,
    ExitIcon

} from './styles';

export function MenuBar(){
    return(
        <Container>
            <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Incial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton>
                    <ProfileIcon className="active" />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>

                <Botside>
                    <Avatar /> 

                    <ProfileDada>
                        <strong>Duany Souza</strong>
                        <strong>@duany_souza</strong>
                    </ProfileDada>

                    <ExitIcon /> 
                </Botside>

            </Topside>
        </Container>
    )
}