import React from 'react';
import styled from 'styled-components';

const ColorText = styled.div`
    color: #1e1e1e;
    background-color: darkgray;
    background-image: url(https://www.wallpapertip.com/wmimgs/34-347031_old-photo-template-photoshop.jpg);
`

const Img1 = styled.img`
    width: 90vw;
    heigth:10vh;
    margin-left:4.5vw;
    padding: 1vh 0 1vh 0;
`
const ImportantText = styled.span`
    font-weight: bold;
    color: blue;
`

const ImportantText2 = styled.span`
    color: brown;
    font-weight: bold;
`

const ImportantText3 = styled.span`
    color: red;
    font-weight: bold;
`

const ImportantText4 = styled.span`
    color: darkorange;
    font-weight: bold;
`

const ImportantText5 = styled.span`
    color: green;
    font-weight: bold;
`

const Img2 = styled.img`
margin-left: 25vw;
padding: 1vh 0 1vh 0;
`

const Img3 = styled.img`
    margin-left: 16vw;
    padding: 1vh 0 1vh 0;
`

const Img4 = styled.img`
    margin-left:4vw;
    dipslay: grid;
    grid-column: 1/2;
    grid-row: 1/3;
`

const Img5 = styled.img`
    margin-left: 14vw;
    width: 70vw;
    height: 60vh;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
`

const Container2 = styled.div`
    display: grid;
    grid-column: 1/2;
    grid-row: 1/3;
`
const Container3 = styled.div`
    dispay: grid;
    grid-column: 2/3;
    grid-row: 1/2;
    width: 60vw;
`

const Container4 = styled.div`
    display: grid;
    grid-column: 2/3;
    grid-row; 2/3;

`

const Title = styled.h1`
    text-align:center;
    font-weight: bold;
    font-size: 4em;
    padding-top: 1vh;
    margin: 0;
`

const Text = styled.p`
    font-size:1.5em;
    padding: 0 4vw 0 4vw;
`

const Story = () => {
    return (
        <ColorText>
            <Title>Ere Dominaria (1993-2003)</Title>
                <Text>
                    Les dix premières années de Magic sont centrées sur le plan de Dominaria mais également sur ceux, plus mineurs, de Rajh, d'Ulgothra, du Royaume de Serra et de Mercadia qui tournent autour du premier. La quasi-totalité de l'histoire de cette époque est racontée soit dans des romans, soit directement dans les cartes.
                </Text>
                <Img1 src='https://media.wizards.com/2018/images/daily/7UiWFNy1SI_%208TtRE0aGpX.jpg' alt='Carte du monde magic'></Img1>
                <Text>
                    Avec les premières éditions, nous n'avons pas d'histoire à proprement parler, juste des univers dont on entrevoit l'existence et qui serviront de base aux extensions qui suivront.
                    Pour les éditions de base, elles prennent place un peu partout dans le multivers et il faudra attendre Magic 2013 pour qu'elles soient accompagnées de Magic Story.
                </Text>
            <Title>Antiquities (printemps 94)</Title>
                <Text>
                    La guerre des frères, ou <ImportantText>La Guerre des Antiquités</ImportantText>, oppose les artificiers <ImportantText>Urza, seigneur grand-artificier</ImportantText>, le premier héro de Magic, à son frère <ImportantText2>Mishra, prodige artificier</ImportantText2>, sur le continent de Terisiare, sur Dominaria. Au terme de la guerre, Urza découvre que son frère a été corrompu par les Phyrexians (une race venue du plan de Phyrexia). Il décide donc d'utiliser le <ImportantText3>Golgothian Sylex</ImportantText3> pour anéantir les deux armées. Au moment où il devrait mourir dans l'explosion, son Étincelle de planeswalker s'embrase, lui offrant des pouvoirs divins et la faculté de voyager entre les plans.
                    La suite de l'histoire d'Urza ne sera racontée que dans le bloc Epopée d'Urza en 98, les extensions suivantes décrivant la suite de l'histoire du plan de Dominaria.
                </Text>
                <Img2 src="http://www.smfcorp.net/images/artworks/big/9882.jpg" alt="Urza qui déclenche le sylex et ravage Terisiare alors que son étincelle s'active."></Img2>
            <Title>The Dark (été 94)</Title>
                <Text>The Dark explore Dominaria à l'époque qui suit la guerre des Frères (jusqu'à 400 ans après), dans une époque d'obscurantisme et d'obscurité. En effet, <ImportantText3>l'explosion du sylex par Urza</ImportantText3> a créé un nuage qui couvre le ciel, et va bientôt provoquer une ère glaciaire.</Text>
                <Text>Nous suivons le mage Jodah, un descendant de la femme d'Urza laissée après la guerre. Après une attaque de gobelins, il fuit dans une Fontaine de jouvence, ce qui lui offrira une jeunesse éternelle. Au cours de ses voyages, il est amené à sauver <ImportantText2>Ith, grand arcaniste de Mairsil</ImportantText2>, le prétendant en utilisant un miroir transmis par son maître.</Text>
                <Img3 src='http://www.smfcorp.net/images/artworks/big/10281.jpg' alt='Jodah, à notre époque.'></Img3>
            <Title>Ère Glaciaire et Alliances (printemps 95 - 96)</Title>
            <Text>
                Ère glaciaire introduit le paradigme des « blocs », les extensions sortent désormais par 3, une grosse et deux petites, dont l'histoire est continue. Le quatrième set de l'année sera une édition de base.
                Alliances est donc la suite directe d'Ère glaciaire, mais Terres Natales s'intercale entre les deux, on ne sait pas trop pourquoi étant donné qu'il n'a rien à voir avec les autres. Ces deux extensions seront complétées par une troisième en été 2006, Souffle Glaciaire, de façon toute aussi étrange vu qu'il n'y avait plus grand-chose à raconter.
            </Text>
            <Container>
                <Container2>
                    <Img4 src="http://www.smfcorp.net/images/artworks/big/9929.jpg" alt="Tapisserie du Temps des glaces représentant, en haut, Darien, roi du Kjeldor et Lovisa Froid Regard, et en bas, Jaya Ballard, mage de force et Jodah, archimage éternel"></Img4>
                </Container2>
                <Container3>
                    <Text>
                        L'histoire fait suite à The Gathering Dark. Un clone de Jodah se réveille, invoqué par <ImportantText4>Lim-Dûl, le Nécromancien</ImportantText4> dans sa citadelle. Il est chargé par ce dernier d'enquêter sur le plan vagabond de Shandalar ; et le planeswalker Leshrac, qui a asservi Lim-Dûl, cherche à s'échapper de l'éclat des 12 plans qui coupent Dominaria du reste du Multivers depuis l'explosion du Sylex. Plus tard, le clone de Jodah rencontre <ImportantText4>Jaya Ballard, mage de force</ImportantText4>, une de ses anciennes élèves de l'école de l'Inapparence, et <ImportantText5>Freyalise, Fureur de Llanowar</ImportantText5>, une planeswalker, qui lui révèle qu'il n'est pas un clone mais le véritable Jodah, drogué par Lim-Dûl. Ensemble, ils vont unir les barbares Buldavians et le royaume de Kjeldor contre les forces de Lim-Dûl. Durant la bataille finale, Lim-Dûl révèle à Jodah qu'il a fusionné avec l'âme de Mairsil, retrouvée dans un anneau. Cependant Leshrac leur portera le coup fatal car ils ont gaspillé les forces destinées à l'attaque de Shandalar dans cette guerre. Après la bataille, Freyalise utilise le miroir de Jodah pour lancer une déflagration du sylex inversée, ce qui déclenche la fin de l'Ère Glaciaire et détruit l'éclat des 12 plans, libérant ainsi les planeswalkers, mais ouvrant en même temps la porte aux Phyrexians.
                    </Text>
                </Container3>
                <Container4>
                    <Text>
                        Jaya et Jodah, 20 ans après la bataille contre Lim-Dûl, retrouvent la main de ce dernier à laquelle il manque l'anneau de Mairsil. Au cours de leur enquête, ils rencontrent Lothar Lovisason, fils de <ImportantText4>Lovisa Froid Regard</ImportantText4>, et son groupe de Buldavians qui fuient la montée des eaux due au réchauffement et les attaques d'un groupe de Kjeldoriens (pourtant leurs alliés dans la guerre contre Lim-Dûl). Jaya, quant à elle, retrouve l'anneau en tant que talisman d'un shamane du groupe. Le groupe d'attaquants était en fait dirigé, non pas par <ImportantText5>Darien, roi du Kjeldor</ImportantText5> mais par <ImportantText4>Vartchaïld, traîtresse du Kjeldor</ImportantText4>. Une fois de plus, Jodah et Jaya permettent la paix entre Kjeldor et Buldavia contre leur ennemi commun dans ce qui va devenir la Nouvelle Argive. Plus tard, <ImportantText>Arcum Dagsson, artificier</ImportantText> qui mène des fouilles sur la Guerre des Frères, présente des <ImportantText5>Bête de guerre phyrexiane</ImportantText5> à Jodah et Jaya. A ce moment, Jaya se révèle être sous l'emprise de l'anneau de Lim-Dûl/Mairsil, poignarde Jodah à mort et utilise son sang (donc celui d'Urza) pour s'emparer des machines. En désespoir de cause, Jodah se réfugie dans son miroir, à raison puisque qu'une apparition de Freyalise lui vient, le soigne et tente de déclencher une Étincelle en lui. En effet, Freyalise en avait décelé la trace près de Jodah et souhaitait à la fois le punir de son mépris envers les planeswalkers et le récompenser de son aide en faisant de lui l'un des leurs, et elle avait donc enchanté le miroir à cette fin. Mais Jodah ne possédait aucune Étincelle en lui. Il retourne donc dans le combat contre Lim-Dûl/Mairsil/Jaya et réalise d'où venait la méprise de Freyalise. L'Etincelle était en fait celle de Jaya. Jodah fracasse donc le miroir sur sa tête, ce qui libère le sort et la transforme en planeswalker. Dans la <ImportantText3>Fournaise immolatrice de Jaya</ImportantText3>, elle est purgée de Lim-Dûl et Mairsil et détruit leurs bêtes phyrexianes.
                    </Text>
                </Container4>   
            </Container>
            <Title>La guerre des Planeswalkers(Automne 2018)</Title>
                <Text>
                    Conclusion de l'Arc sur Nicol Bolas avec cet événement qui réunit une bonne partie des planeswalkers vivant sur Ravnica pour l'affronter.
                    Cette édition marque aussi le retour des romans. Le premier d'entre eux se concentrera sur le gros de l'histoire et sera complété par les Magic Story, qui racontent en parallèle le point de vue de Rat, une sans guilde ; et des histoires préquels qui seront écrites en partenariat avec Del Rey et envoyées par mail (en anglais bien sûr), qui suivront le personnage d'Hekara, une Rakdos amie de Rat.
                    Publier le préquel après le reste est pas l'idée la plus lumineuse de l'année. A l'heure où j'écris, on sait comment finit Bolas mais pas comment <ImportantText4>Niv-Mizzet revenu à la vie est mort</ImportantText4>. Oui, parce qu'il est mort, il fallait déjà le savoir.
                    Ajoutez à cela le fait que le roman est un échec critique, l'exécution de ce storytelling est en demi-teinte. Mais on ne tardera pas à faire le tri là-dedans et sortir un article clair sur la globalité du set.
                </Text>
                <Img5 src="http://www.smfcorp.net/images/artworks/big/15673.jpg" alt="Invasion de la Horde de l'effroi"></Img5>

        </ColorText>
    )
}

export default Story;