//FUNCIONALITIES
import {useEffect, useState} from 'react';

//COMPONENTS
import Mensage from '../layout/mensagem.js';
import styles from './home.module.css';
import Button from '../layout/button';

//IMAGES
import webLogo from '../../img/WebLogo.png';
import suporte from '../../img/supportLogo.png';
import aplicativo from '../../img/appsLogo.png';
import software from '../../img/SoftwareLogo.png';
import marketing from '../../img/MarketingLogo.png';
import seguranca from '../../img/SegurançaLogo.png';
import imgPitbull from '../../img/img-pitbullDev.png';
import insta from '../../img/instagram.png';
import linkedin from '../../img/github.png';
import github from '../../img/linkedin.png';
import facebook from '../../img/facebook.png';
import email from '../../img/enviar.png';
import telefone from '../../img/telefone-fixo.png';
import pitbull from '../../img/pitbull_3.png';
import logoSimples from '../../img/logoSimples.png';
import pitbullSocial from '../../img/pitbull_2.png';

//FUNCTION FATHER
function Home(){
        
    //DATES OF STATES
	const [cadastro, setCadastro] = useState({
    	name: "",
    	email: "",
    	msg: ""
    })
	const [status, setStatus ] = useState('');
    const [title, setTitle ] = useState('');
    const [subtitle, setSub ] = useState('');
    
	//FUNCTION SAVE USER
	const cadastrar = e => {
    	setCadastro({...cadastro, [e.target.name] : e.target.value})
    };

	//FUNCTION SUBMIT USER MESSAGE
	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch('http://localhost:8080/projetos/php/contato.php',{
		        method: 'POST',
		        headers: {
		        	'Content-Type' : 'application/json'
		        },body: JSON.stringify({cadastro})
		}).then((resp) => resp.json())
		.then((data) => {
		
			setStatus(data.err);
			setStatus(!status);
		
			if(!status){
				setTitle("Menssagem enviada com sucesso")
				setSub("Entraremos em contato o quanto antes")
			}else{
				title = "Menssagem Nao foi enviada"
				subtitle = "Ouve um erro de conxão, tente novamente mais tarde"
			}
		
		}).catch(err => console.log(err));	
			e.target.name.value = "";
			e.target.email.value = "";
			e.target.msg.value = "";
	}
		//SHOW MESSAGE CONFIRMATION
		useEffect(() => {
			if(status === true){
				setStatus(true);
			    return;
			}
				setStatus(false)
				const mensagemTimer = setTimeout(() => {setStatus(false)},5000)
				setStatus(false)
				return () => clearTimeout(mensagemTimer)

		},[status])
					
	return(
		<>
			{status && <Mensage txt={title} subTxt={subtitle}/>}{/*MESSAGE*/}
			
			<section className={styles.WelcomPage}>		
				<div className={styles.triangule}>
					<svg>
	  				<polygon points="0,50 0,530 1030,530" />
					</svg>
				</div>
				<div className={styles.pitbull}>
					<img src={pitbull} alt="Pitbull_Image"/>
				</div>
				<div className={styles.textArea_welcome}>
				  <h1>BULLDEV</h1>	
		          <p>
		          	Nós somos uma empresa de tecnologia que inova com 
		          	a lealdade e força de um pitbull!
		          </p>
		        <Button text="SAIBA MAIS" />
				</div>
			</section>{/*WELCOME SECTION*/}

			<section className={styles.sectionSobre}>
				<div className={styles.sobre}>
					<h1>SOBRE</h1>
					<p>
						BullDev é uma empresa de <span className={styles.destacText}>desenvolvimento web e software</span> que se compara à
						força e determinação de um pitbull. Ela é reconhecida por sua <span className={styles.destacText}>inovação</span>,
						excelência e equipe de especialistas dedicados a fornecer soluções
						personalizadas. A empresa valoriza a <span className={styles.destacText}>lealdade e a coragem</span>, semelhantes às do
						pitbull, e se empenha em construir relações duradouras com seus parceiros. A
						<span className={styles.destacText}>BullDev</span> se compromete a transformar desafios em oportunidades, assegurando
						que cada projeto contribua para o crescimento e sucesso no ambiente digital. É
						a parceira ideal para quem procura resiliência e inovação em soluções
						tecnológicas.
					</p>
					<p>
					<span className={styles.destacText}>Nossa</span> paixão nos impulsiona a ir além, garantindo que cada projeto seja uma
						jornada de transformação e crescimento. Com a BullDev, você tem a certeza
						de que <span className={styles.destacText}>sua empresa</span> não apenas enfrentará os desafios da era digital, mas
						também se destacará, aproveitando ao máximo as oportunidades que
						surgem. A BullDev é a <span className={styles.destacText}>escolha certa</span> para quem busca um <span className={styles.destacText}>aliado resiliente</span> e
						inovador no desenvolvimento de soluções tecnológicas que levam ao
						<span className={styles.destacText}>sucesso</span>.
					</p>
				</div>
				<div className={styles.cards}>
					
					<div className={`${styles.card} ${styles.cardForce}`}>
						<div className={styles.opaci} >
							<h1>FORÇA</h1>
							<p>A força no desenvolvimento de sistemas é como a gravidade no universo: invisível,
							mas essencial, mantendo os planetas em órbita e garantindo a harmonia cósmica. No mundo digital,
							ela é a base que sustenta o código mantendo os dados fluindo com as funcionalidades.</p>
						</div>	
					</div>
					<div className={`${styles.card} ${styles.cardLealdade}`}>
						<div className={styles.opaci} >
							<h1>LEALDADE</h1>
							<p>A lealdade no mundo da tecnologia é como o farol para os navios em mar aberto: sempre constante
							 guiando através das tempestades de bugs e incertezas, assegurando que cada linha de 
							 código nos leve ao porto seguro da eficiência e da satisfação do usuário.</p>
						</div>
					</div>
					<div className={`${styles.card} ${styles.cardInovacao}`}>
						<div className={styles.opaci} >
							<h1>INOVAÇÃO</h1>
							<p>A inovação no desenvolvimento de sistemas -e como oalvorecer em um novo mundo: cada avanço
							é como um raio de sol que rompe as sombras do convencional, iluminando caminhos não trilhados e 
							insipirando criações que moldam o futuro da tecnologia.</p>
						</div>
					</div>					
						<svg className={styles.polign}>
	  						<polygon points="0,0 100,500 0,1000" />
						</svg>
				</div>
			</section>{/*SOBRE SECTION*/}

			<section className={styles.servicos}>
				<div className={styles.titleSobre}>
					<h1>NOSSOS</h1>
					<h1>SERVIÇOS</h1>
				</div>
				<div className={styles.conteinerboxs}>
					<div className={styles.boxs}>
						<img alt="logoSimples" src={webLogo}/>
						<h1>Desenvolvimento Web</h1>
						<p>	Na bullDev, criamos sites que capturam a essência da sua marca e engajam seu publico.
							Nossa equipe está pronta para elevar a sua presença online.
						</p>
					</div>
					<div className={styles.boxs}>
						<img alt="logoSimples" src={software}/>
						<h1>Desenvolvimento de Software</h1>
						<p>	Na BullDev, desenvolvemos softwares so medidas para impulsionar negócios. Nossa paixão
							é criar soluções tecnológicas que inovam e otimizam processos, garantindo que sua empresa esteja sempre á frente no mercado digital.
						</p>
					</div>
					<div className={styles.boxs}>
						<img alt="logoSimples" src={aplicativo} />
						<h1>Desenvolvimento de Aplicativos</h1>
						<p>	na BullDev especializamo-nos em criar apps mobile intuitivos e inovadores. Nossa missão é transformar suas ideias em aplcações móveis
						   	que oferecem experiências únicas e envolventes para os usuários.
						</p>
					</div>
					<div className={styles.boxs}>
						<img alt="logoSimples" src={suporte} />
						<h1>Support Personalizado</h1>
						<p>	Entendemos que cada projeto é unico. Por isso, oerecemos suporte persnalizado para garantir que suas necessidades
						   	específicas sejamatendidas com excelêcia. Com uma abordagem indiviualizada, estamos prontos para ajudá-lo a superar qualquer
						   	desafio técnico ealcançar seus objetivo de negócios.
						</p>
					</div>
					<div className={styles.boxs}>
						<img alt="logoSimples" src={seguranca} />
						<h1>Segurança dos Seus Dados</h1>
						<p>	A segurança dos seus dados é a nossa prioridade máxima. Ultilizamos as tecnologias mais avançadas e seguimos as melhores praticas
							do setor para protejer suas informações, garantimos que seus dados estejam seguros e acessíveis apenas para vocẽ.
						</p>
					</div>
					<div className={styles.boxs}>
						<img alt="logoSimples" src={marketing} />
						<h1>Marketing Digital</h1>
						<p>	No mundo digital de hoje, uma presenç online forte é essencial. Combinamos SEO, conteúdo otimizado e campanhas
							publicitárias direcionadas para colocar sua marca na vanguarda do seu setor. Vamos transformar seus visitantes
							em clientes fiéis.
						</p>
					</div>																									
				</div>	
				<div className={styles.textServicos}>
					<p className={styles.textFluter}>Transforme seua visão em realidade com a nossa paixão por tecnogia. Na BullDev, respiramos inovação
						e vivemos para ajudar seu negócio a brilhar no mundo digital. Com um foco icansável e um desejo ardente 
						de excelência estamos aqui para ser o farol que guia sua empresa rumo ao sucesso. Entre em contato conosco
						e dê o primeiro passo emdireção ao futuro.<img alt="logoSimples" className={styles.logoPonto } src={logoSimples}/>
					</p>
					<img alt="logoSimples" src={imgPitbull}/>
				</div>
				<hr/>
			</section>{/*SERVICES SECTION*/}
			<section className={styles.contato}>
				<div>	
					<div className={styles.title}>
						<h1>CONTATO</h1>
						<h2>Contate-nos já!</h2>
						<p>Realize seu projeto digital com um clique</p>
					</div>

					<div className={styles.formulario}>
						<form onSubmit={handleSubmit}>
							<div className={styles.inputConteiner}>
								<label for="name">Name</label>
								<input type="text" className={styles.inputs} onChange={cadastrar} id="name" name="name" placeholder="Insira o seu Nome"/>
							</div>

							<div className={styles.inputConteiner}>
								<label for="email">E-mail</label>
								<input type="email" className={styles.inputs} onChange={cadastrar} id="email" name="email" placeholder="Insira o seu melhor e-mail"/>
							</div>

							<div className={`${styles.inputConteiner} ${styles.textareaConteiner}`}>
								<label for="msg">Mensagem</label>
								<textarea className={styles.inputs} onChange={cadastrar} id="msg" name="msg" placeholder="Nos mande uma Menssagem!"></textarea>
							</div>

							<Button type={"submit"} text={"ENVIAR MENSAGEM"} />
						</form>
					</div>
				</div>
				<div className={styles.redesSociais}>
					<div className={styles.redesContacts}>
						<h1>Redes Sociais</h1>		
						<p>Conecte-se conosco nas redes sociais e fique por dentro das novidades!</p>

						<div className={styles.logs}>
							<span><img alt="logoSimples" src={telefone}/><h2>+55 (73) 99991-6255</h2></span>
							<span><img alt="logoSimples" src={email}/><h2>bulldevsolutions@gmail.com</h2></span>
							<span><img alt="logoSimples" src={insta}/><h2>@bulldev_ofc</h2></span>
						</div>		
						
						<div className={styles.icons}>
							<h3 >Siga-nos</h3>
							<img src={facebook} alt="facebook.icon"/>
							<img src={insta} alt="instagram.icon"/>
							<img src={linkedin} alt="Linkedin.icon"/>
							<img src={github} alt="Github.icon"/>
						</div>
						<img src={pitbullSocial} className={styles.pitbullSocial}  alt="Imagem Pitbull"/>
					</div>
				</div>	

			</section>{/*CONTACT SECTION*/}
		</>

		)
}

export default Home;
