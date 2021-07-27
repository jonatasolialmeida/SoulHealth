import React from 'react';
import { Text, View } from 'react-native';
import { box, format, titulo } from '../../style/style';

export default function InfoDica1() {
    return (

        <View style={box.container}>
            <View style={titulo.container}>
                <Text style={titulo.tit}>
                    As armadilhas do inverno para o controle de peso
                </Text>
            </View>
            <View>
                <Text style={format.subtit}>
                    Por Antonio Lancha Jr
                </Text>
                <Text style={format.paragdic}>
                    O inverno chegou e, com ele, aquelas comidas saborosas, aromáticas e quentinhas. Ao mesmo tempo, a queda da temperatura faz o nosso apetite se modificar. Já reparou como as saladas, tão apreciadas no verão, muitas vezes não nos apetecem no inverno?
                </Text>
                <Text style={format.paragdic}>
                    O interessante é que frequentemente ouvimos que gastamos mais energia nessa estação do ano e, por isso, não precisamos ter tanto medo de engordar ao degustar comidas mais gordurosas. Atenção: acreditar nisso pode te induzir a uma cilada, capaz de atrapalhar a perda e/ou a manutenção do peso. Essa colocação só seria verdadeira se a gente vivesse ao relento, dependendo basicamente de nossas reservas para preservar a temperatura corporal.
                </Text>
                <Text style={format.subtit}>
                    De onde surgiu essa idéia?
                </Text>
                <Text style={format.paragdic}>
                    Se estivermos desprotegidos e expostos a um clima gélido, nosso organismo de fato irá promover alguns mecanismos para tentar ajustar a temperatura e não deixar o  esfriar. Nesse contexto, nossos músculos eretores dos pelos são estimulados e começamos a tremer, por exemplo – são tentativas de produzir mais calor.
                </Text>
                <Text style={format.paragdic}>
                    Agora, vem a pergunta-chave: no inverno, você realmente passa frio ou está sempre abrigado? Esse é o ponto. Raramente estamos de fato expostos a baixas temperaturas, sem qualquer tipo de isolamento.
                </Text>
                <Text style={format.paragdic}>
                    Muitos pensam que os esportes de inverno, como o esqui na neve, levaria a um gasto energético elevado por causa temperatura ambiente. Outro engano. Para praticar esse tipo de atividade, são usadas roupas específicas para o clima. Isso faz toda a diferença.
                </Text>
                <Text style={format.paragdic}>
                    No inverno, também temos menos estímulos para deslocamentos a pé ou prática de  mais prolongada no ambiente aberto, o que contribui, na verdade, para um menor gasto energético.
                </Text>
                <Text style={format.paragdic}>
                    Logo, a hipótese de gastar mais energia no inverno não se aplica à nossa vida nos dias de hoje.
                </Text>
                <Text style={format.paragdic}>
                    Por outro lado, o fato de preferirmos consumir os alimentos mais aromáticos, saborosos e calóricos no inverno tem sua origem na evolução e na nossa história alimentar. E não há problema em aproveitar essa época do ano para se deliciar com pratos e receitas que combinam com o clima frio.
                </Text>
                <Text style={format.paragdic}>
                    Só tome cuidado para não cair na pegadinha de achar que o gasto calórico no inverno é maior e, portanto, capaz de lidar com eventuais excessos. Como vimos, isso é balela. Se quiser mesmo gastar energia, exercite-se – mesmo no frio.
                </Text>
            </View>
        </View>

    )
}