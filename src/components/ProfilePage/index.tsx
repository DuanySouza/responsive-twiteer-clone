import { Feed } from "../Feed";

import { 
    Container, 
    Banner, 
    Avatar,
    ProfileDada,
    LocationIcon,
    CakeIcon,
    EditButton,
    Followage

} from "./styles";

export function ProfilePage() {
    return(
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileDada>
                <EditButton outlined >Editar perfil</EditButton>

                <h1>Duany Souza</h1>
                <h2>@duany_souza</h2>

                <p>
                    Front-end developer
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Campinas, São Paulo
                    </li>
                    <li>
                        <CakeIcon />
                        Nascida em 17 de Outubro de 1998
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>672</strong> seguidores
                    </span>
                </Followage>
            </ProfileDada>
            <Feed />
        </Container>
    )
}