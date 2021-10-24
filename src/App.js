import React from "react";
import {
    AppRoot,
    Avatar,
    Button,
    Card,
    Div,
    Header,
    Panel,
    PanelHeader,
    RichCell,
    SplitCol,
    SplitLayout,
    Title,
    useAdaptivity,
    View,
    ViewWidth
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {Icon24LinkCircle} from "@vkontakte/icons";
import "./App.css"
import pic from "./12.jpg"

const App = () => {
    const {viewWidth} = useAdaptivity();

    const users = [
        {
            name: "Сергей Софронов",
            description: "Фронтендер, бэкендер, плейбой и просто хороший парень",
            sub: "Как дела как дела это новый кадиллак",
            link: "https://vk.com/s0fronov",
            photo: "https://sun9-45.userapi.com/s/v1/ig2/3naftETF6FFdua6iuT4XP1xHeR2kcsyh3iPEhS-5R-41fE7B3FMF4B_UUxJxd0YAJhJMja6TgLxcb3BisR8WXNwx.jpg?size=200x200&quality=96&crop=37,480,1018,1018&ava=1"
        },
        {
            name: "Данила Улаев",
            description: "Фронтендер, бэкендер, плейбой и просто хороший парень",
            sub: "Как дела как дела это новый кадиллак",
            link: "https://vk.com/danone_vanilniy",
            photo: "https://sun9-17.userapi.com/s/v1/ig2/JOFKcC1MOff6bswOmqq8oTGX5vDm6T4UmNvkgpTVTouLTjIRt3jEAwFhCawyGsBBQIuLEXZsOv-8phfbJmHnpyYf.jpg?size=200x200&quality=96&crop=212,609,598,598&ava=1"
        },
        {
            name: "Селим Каюмов",
            description: "Фронтендер, бэкендер, плейбой и просто хороший парень",
            sub: "Как дела как дела это новый кадиллак",
            link: "https://vk.com/haswell49",
            photo: "https://sun9-42.userapi.com/s/v1/ig2/nPFKzBN7vREpVX64HGbAQw0uYB8I9ccuPeyjdFowxCNsm9oby8k56TufmMBA1oSN7Sm_-dDSN89yEfSZWQ7LD4V3.jpg?size=200x200&quality=96&crop=58,0,850,850&ava=1"
        }
    ]

    return (
        <AppRoot>
            <SplitLayout header={<PanelHeader separator={false}/>}>
                <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>Крабовый салат</PanelHeader>
                            <Div>
                                <Card mode="shadow" style={{marginTop: "20px", textAlign: "center"}}>
                                    <Div>
                                        <Title level={1}
                                               style={{justifyContent: "center", marginBottom: "10px"}}>Привет!</Title>
                                        Это команда <span style={{color: "rgb(255, 148, 124)", fontWeight: "bold"}}>"Крабовый салат"</span>.
                                        <br/>
                                        Мы все учимся в БФУ им. Канта и вместе делаем классные штуки!
                                        <br/>
                                        <Header style={{justifyContent: "center"}}>А вот и мы:</Header>
                                    </Div>
                                </Card>
                                <div className="we-are">
                                    {
                                        users.map(u => {
                                            return (
                                                <div className="user-card">
                                                    <Card mode="shadow" style={{marginTop: "20px"}}>
                                                        <RichCell
                                                            before={<Avatar size={72}
                                                                            src={u.photo}/>}
                                                            text={u.description}
                                                            caption={u.sub}
                                                            actions={
                                                                <React.Fragment>
                                                                    <Button before={<Icon24LinkCircle/>} href={u.link} target="_blank">Профиль ВК</Button>
                                                                </React.Fragment>
                                                            }
                                                            multiline
                                                        >
                                                            {u.name}
                                                        </RichCell>
                                                    </Card>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <Card mode="shadow" style={{marginTop: "20px"}}>
                                    <Div style={{textAlign: "center"}}>
                                        <Title style={{justifyContent: "center"}} level={2}>А вот так мы кодим вездекод!</Title>
                                        <br/>
                                        <div style={{borderRadius: "15px", overflow: "hidden"}}>
                                            <img style={{width: "100%"}} src={pic} alt=""/>
                                        </div>
                                    </Div>
                                </Card>
                            </Div>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

export default App