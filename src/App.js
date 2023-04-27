import './App.css';
import Relatorio from './components/relatorio';

const imagensContext = require.context('./assets', false, /\.(png|jpe?g|svg)$/);
const imagens = imagensContext.keys().map(imagensContext);

function App() {
  const DadosInfo = [
    {
      nomeproprietario: "ACLEITON DE OLIVEIRA ROCHA",
      placa: "CLH-1J28"
    },
    {
      nomeproprietario: "ADAILTON ARAUJO",
      placa: "LBO0018"
    },
    {
      nomeproprietario: "ADAILTON CHAVES DE ARAUJO",
      placa: "DJE-5898",
      rota: "8.6km",
      diaria: "34.4km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "ADRIANO SOUZA OLIVEIRA ",
      placa: "MCH-7968",
      rota: "11.7km",
      diaria: "46.8km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "ALAN CARLOS ALVES DE ARAUJO",
      placa: "KUG-5124"
    },
    {
      nomeproprietario: "ALEXANDRE ALCANTRA",
      placa: "CLJ-6781"
    },
    {
      nomeproprietario: "ANDERSON SOUZA FERREIRA",
      placa: "DPC-2789",
      rota: "14.1km",
      diaria: "28.2km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "ANDRE TELES BRANDÃO ",
      placa: "DJE-8586",
      rota: "19.3km",
      diaria: "77.2km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "ANIZIA SANTOS NASCIMENTO",
      placa: "DDE-3450",
      rota: "22km",
      diaria: "44km",
      turno: "Noturno"
    },
    {
      nomeproprietario: "ANSELMO O. AMORIM",
      placa: "CDL-7843"
    },
    {
      nomeproprietario: "ANSELMO O. AMORIM",
      placa: "DJB-7971"
    },
    {
      nomeproprietario: "ANTÔNIO DOURADO DE SOUZA ",
      placa: "JOJ-3581",
      rota: "8km",
      diaria: "16km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "ANTONIO HERMELINO MENDES NETO",
      placa: "JPV-7487"
    },
    {
      nomeproprietario: "ANTONIO OLIVEIRA DE SOUZA JUNIOR ",
      placa: "GXH 0574"
    },
    {
      nomeproprietario: "ARAUJO ALVES EMPREENDIMENTOS",
      placa: "DJB-1229",
      rota: "14.9km",
      diaria: "29.8km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "ATEVALDO MENDES DE OLIVEIRA ",
      placa: "JUN-9423",
      rota: "10.9km",
      diaria: "43.6km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "BRENO DE ARAUJO SOUZA",
      placa: "DET-2F78",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "CAIO SOUZA OLIVEIRA",
      placa: "DPP 9288",
      rota: "2.1km",
      diaria: "8.4km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "CARLOS JOSE BISPO DE SOUZA",
      placa: "DPC-2784",
      rota: "3.6km 6km",
      diaria: "19.2km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "CARLOS JOSÉ BISPO DE SOUZA",
      placa: "JQO-3662"
    },
    {
      nomeproprietario: "CARLOS JOSE GASPAR DE SOUZA",
      placa: "JOA-6C04",
      rota: "10km",
      diaria: "20km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "CATIELE SANTOS",
      placa: "KQN2265",
      rota: "20km",
      diaria: "80km ",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "CLERISTON BRITO SÁ TELES",
      placa: "NGH-7B28",
      rota: "2.2km",
      diaria: "8.8km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "CLESSIANO ALVES BARROS",
      placa: "CPJ-3739",
      rota: "4.6km",
      diaria: "18.4km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "DEILTON JOSÉ DOS SANTOS",
      placa: "BOO2865",
      rota: "25.2km",
      diaria: "50.4km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "DELANIO AFRÂNIO MENDES ",
      placa: "JLB-8843",
      rota: "14km",
      diaria: "28km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "DJONLEI SOARES PINTO",
      placa: "CES5C07",
      rota: "15km",
      diaria: "30km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "DOUGLAS CAVALCANTE DE OLIVEIRA",
      placa: "CZH-8300"
    },
    {
      nomeproprietario: "EDIMAR ALVES DE OLIVEIRA ",
      placa: "DJE-3884",
      rota: "10km",
      diaria: "20km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "EDSON OLIVEIRA SANTOS",
      placa: "CLN-9896",
      rota: "7.2km",
      diaria: "14.4km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "EDUARDO ALVES DE OLIVEIRA",
      placa: "JSJ-6A39"
    },
    {
      nomeproprietario: "EDVALDO ALVES DE MIRANDA ",
      placa: "KQP - 3D49",
      rota: "16km 4km",
      diaria: "36km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "EDVALDO ALVES DE MIRANDA ",
      placa: "LCR - 6454"
    },
    {
      nomeproprietario: "ELI ARAUJO",
      placa: "HKD-6666"
    },
    {
      nomeproprietario: "ELIZEU JOAQUIM",
      placa: "CGR2380"
    },
    {
      nomeproprietario: "ERIC DOURADO BISPO",
      placa: "JOA-6297"
    },
    {
      nomeproprietario: "ETEVALDO ALVES",
      placa: "CQH4A65"
    },
    {
      nomeproprietario: "ETEVALDO ALVES DE SOUZA ",
      placa: "CNJ-0465"
    },
    {
      nomeproprietario: "ETEVALDO ALVES DE SOUZA ",
      placa: "CRH-4A65"
    },
    {
      nomeproprietario: "ETEVALDO NUNES BRITO",
      placa: "CBS-4039"
    },
    {
      nomeproprietario: "ETEVALDO NUNES BRITO",
      placa: "DZI 3216"
    },
    {
      nomeproprietario: "EUCLIDES DOS SANTOS NETO",
      placa: "DEC-1371"
    },
    {
      nomeproprietario: "EVERTON DOS SANTOS VASCONCELOS",
      placa: "BYG-1549"
    },
    {
      nomeproprietario: "EVILASIO GONCALVES BARBOSA",
      placa: "CYR-8927"
    },
    {
      nomeproprietario: "FABIANO DA SILVA PINA",
      placa: "HRN-7E41"
    },
    {
      nomeproprietario: "FABIO ROCHA DO SANTOS ",
      placa: "CXA-1E71"
    },
    {
      nomeproprietario: "FABIO SANTOS SOUZA",
      placa: "LOX-7847",
      rota: "43km",
      diaria: "86km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "FERNANDO DE SOUZA BRAGA",
      placa: "DBL9980",
      rota: "6.8km",
      diaria: "13.6km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "FIDELCINA ALVES DE SOUZA ",
      placa: "CNS-4711"
    },
    {
      nomeproprietario: "FRANCISCO PEDRO DE ALCANTRA",
      placa: "KNC-6612",
      rota: "6km",
      diaria: "24km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "GESSICA ARAUJO DE SOUZA",
      placa: "BXC-3A54"
    },
    {
      nomeproprietario: "GILBERTO MARTINS DE SOUZA ",
      placa: "MDX-4564",
      rota: "14.4km",
      diaria: "28.8km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "GILDEIR JESUS ",
      placa: "MTN-9275"
    },
    {
      nomeproprietario: "GILDENOR FRANCISCO DE SOUSA",
      placa: "CZX-8D22",
      rota: "19.4km",
      diaria: "38.8km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "GILMAR JONAS DE SOUZA",
      placa: "JEW-0785"
    },
    {
      nomeproprietario: "GIONE NOVAES DE SOUZA",
      placa: "JSP-8775",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino"
    },
    {
      nomeproprietario: "GUSTAVO FRANCISCO DE SOUZA ",
      placa: "KNS-0103"
    },
    {
      nomeproprietario: "HENRIQUE FERREIRA DE SOUZA ",
      placa: "CYB-5835",
      rota: "7.8km 8.7km 9.8km",
      diaria: "26.3km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "IRANILDO TEIXEIRA DOS SANTOS",
      placa: "KXC-0154",
      rota: "7km",
      diaria: "14km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "ISMAEL JOSE DOS SANTOS ",
      placa: "CLT-7332"
    },
    {
      nomeproprietario: "ISMAEL JOSE DOS SANTOS ",
      placa: "OKS-0D16",
      rota: "8.6km",
      diaria: "17.2km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "JAILSON SANTOS DE OLIVEIRA ",
      placa: "DIR-3298"
    },
    {
      nomeproprietario: "JAILTON OLIVEIRA DE SOUZA",
      placa: "JOT-6E03"
    },
    {
      nomeproprietario: "JARBAS ALVES FERREIRA ",
      placa: "JJB-6735"
    },
    {
      nomeproprietario: "JEFERSON SANTOS RODRIGUES",
      placa: "DPC-2788",
      rota: "12.5km",
      diaria: "25km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "JEFERSON VASCONCELOS DOS SANTOS",
      placa: "GVQ-2472",
      rota: "17km",
      diaria: "34km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "JOÃO BATISTA NOVAES ARAÚJO",
      placa: "CPG-2082",
      rota: "8.7km",
      diaria: "17.4km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "JOÃO DE DEUS SAMPAIO SANTOS FILHO",
      placa: "DJB-5893"
    },
    {
      nomeproprietario: "JOAO MENDES DA SILVA FILHO",
      placa: "CLK-0916"
    },
    {
      nomeproprietario: "JOÃO MENDES DA SILVA FILHO ",
      placa: "JOZ-3075",
      rota: "15.4km",
      diaria: "30.8km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "JOAQUIM DA SILVA",
      placa: "EGQ4H16",
      rota: "13km",
      diaria: "26km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "JODENILSON SANTOS DO NASCIMENTO",
      placa: "DAH-4682"
    },
    {
      nomeproprietario: "JOESIO FRNCISCO SOUZA",
      placa: "DBC-6106",
      rota: "3.5km",
      diaria: "14km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "JOSE  FERREIRA BRANDÃO NETO",
      placa: "JOZ-3053",
      rota: "23km",
      diaria: "46km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "JOSE FERNANDO TEIXEIRA",
      placa: "JWY-5319"
    },
    {
      nomeproprietario: "JOSE LOURENÇO MARQUES SOUZA",
      placa: "DPB-3037",
      rota: " 8km 12km",
      diaria: "20km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "JOSE MENDES NETO ",
      placa: "CPT-8704",
      rota: "7km e 8km",
      diaria: "30km",
      turno: "Matutino e Noturno"
    },
    {
      nomeproprietario: "JOSÉ NILDO DE SOUZA",
      placa: "CAT-6203"
    },
    {
      nomeproprietario: "JOSÉ SERGIO DOS ANJOS SANTOS ",
      placa: "MPY-9211"
    },
    {
      nomeproprietario: "JOSEMAR FERREIRA DE SOUZA",
      placa: "CLJ-5202"
    },
    {
      nomeproprietario: "JOSEMAR RODRIGUES",
      placa: "JRI-6914"
    },
    {
      nomeproprietario: "JOSIANE ALVES DOS SANTOS ",
      placa: "DJC-5540",
      rota: "2km",
      diaria: "4km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "JOSIMAR SOUZA FERREIRA",
      placa: "BSG-0164"
    },
    {
      nomeproprietario: "JURACI JOSE DOS SANTOS ",
      placa: "DEE-0181",
      rota: "8km",
      diaria: "16km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "KATIELY",
      placa: "BYG-6333"
    },
    {
      nomeproprietario: "LEISIANE FERREIRA SOUZA",
      placa: "DWH-0H79",
      rota: "FIXO ",
      diaria: "FIXO"
    },
    {
      nomeproprietario: "LUCAS OLIVEIRA NOVAES ",
      placa: "DAO-1304"
    },
    {
      nomeproprietario: "LUCIANO GONÇALVES DE SOUZA ",
      placa: "KMJ-5390",
      rota: "8.6km 38.9km 30km",
      diaria: "77.5km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "LUCILEIDE PEREIRA BATISTA DA SILVA ",
      placa: "CTB-4549",
      rota: "5.3km",
      diaria: "10.6km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "MADSON MENDES SANTOS ",
      placa: "LOX-7947"
    },
    {
      nomeproprietario: "MAICON NASCIMENTO OLIVEIRA",
      placa: "JPQ-0I38",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "MAICON SILVA DE SOUZA",
      placa: "LOL-6820",
      rota: "5.3km",
      diaria: "10.6km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "MAILTON MIRANDA DE ARAÚJO",
      placa: "JGE-3754"
    },
    {
      nomeproprietario: "MANOEL MESSIAS DOS REIS",
      placa: "DAO-3J52",
      rota: "10km",
      diaria: "20km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "MARCELO ANJOS SANTOS ",
      placa: "CQH6H83",
      rota: "22km",
      diaria: "88km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "MARCELO ANJOS SANTOS ",
      placa: "DAH-8636",
      rota: "8km",
      diaria: "16km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "MARIA DA CONCEIÇÃO BARRETO DOS SANTOS",
      placa: "DJK-0566"
    },
    {
      nomeproprietario: "MARIA DO CARMO DOS ANJOS ",
      placa: "DPC-2785"
    },
    {
      nomeproprietario: "MARIA DO CARMO ROSA",
      placa: "DVC-9E25",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "MARLON DOS ANJOS SANTOS ",
      placa: "CKK-5407",
      rota: "9.5km",
      diaria: "19km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "MAURO SERGIO CORDEIRO DE OLIVEIRA",
      placa: "DAH 5005",
      rota: "13.5km",
      diaria: "54km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "MOACI TEIXEIRA ",
      placa: "CMH-9739",
      rota: "14.5km",
      diaria: "29km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "MUDESTO OLIVEIRA MENDES",
      placa: "JHF-9G64",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "NATANAEL TEIXEIRA ",
      placa: "BXA-5776"
    },
    {
      nomeproprietario: "NERISVALDO LIDIO DE JESUS ",
      placa: "BTO-2890"
    },
    {
      nomeproprietario: "NEUDISON DE ARAUJO LIMA ",
      placa: "JSU-8F69",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "NILDEIA OLIVEIRA DA SILVA",
      placa: "BDM-5C54"
    },
    {
      nomeproprietario: "NILTON O. ROCHA",
      placa: "CLJ-6487",
      rota: "12.1km e 33km",
      diaria: "45.1km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "NOBERTO VAZ FERREIRA JUNIOR",
      placa: "ELR-0054",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "ORLANDO MARQUES DE SOUZA ",
      placa: "GZG-0623",
      rota: "14km",
      diaria: "28km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "OSVALDO DE SOUZA SOBRINHO",
      placa: "CXA-6254",
      rota: "6km",
      diaria: "24km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "PABLO MORGAN DE OLIVEIRA",
      placa: "DPC-2793"
    },
    {
      nomeproprietario: "PAULO CEZAR DOS ANJOS",
      placa: "NTQ-9655",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "PAULO FRANCISCO DOURADO",
      placa: "EGU-0H83",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino"
    },
    {
      nomeproprietario: "PAULO SERGIO BARBOSA DA SILVA ",
      placa: "CLK-0998",
      rota: "21.5km",
      diaria: "43km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "PEDRO ALVES DE SOUZA",
      placa: "CPL-0F64",
      rota: "7km e 6.3km",
      diaria: "26.6km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "REGINALDO DE SOUZA",
      placa: "KQI-5921"
    },
    {
      nomeproprietario: "REGINALDO RODRIGUES DE SOUZA ",
      placa: "CLI-6442",
      rota: "32.7km",
      diaria: "65.4km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "REGINALDO SOUZA TELES",
      placa: "JRE5H12"
    },
    {
      nomeproprietario: "REGINALDO SOUZA TELES",
      placa: "LBV-5507",
      rota: "14km 8km ",
      diaria: "50km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "REINALDO DE SOUZA BRAGA ",
      placa: "DCX-4520",
      rota: "16km",
      diaria: "32km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "REINALDO RODRIGUES DE SOUZA ",
      placa: "DAJ-3023"
    },
    {
      nomeproprietario: "RENATO JOSÉ DOS SANTOS ",
      placa: "HYO-0C10"
    },
    {
      nomeproprietario: "ROBERTO ANTONIO DE OLIVEIRA",
      placa: "CLJ-6715"
    },
    {
      nomeproprietario: "ROBERTO ANTONIO DE OLIVEIRA",
      placa: "DMM-3A63",
      rota: "11.5km 4.8km",
      diaria: "39.3km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "ROBERTO TELES BRANDÃO ",
      placa: "DEB-1451"
    },
    {
      nomeproprietario: "ROGERIO DOS SANTOS",
      placa: "CVP-3594",
      rota: "26.4km",
      diaria: "32.8km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "RONALDO BENTO DA SILVA",
      placa: "KEE2906",
      rota: "18km",
      diaria: "36km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "SIDALVA DE JESUS",
      placa: "FRJ-4321"
    },
    {
      nomeproprietario: "SILVANA CORDEIRO CRISPIM",
      placa: "OUY-1G75"
    },
    {
      nomeproprietario: "SILVANO DE OLIVEIRA SANTOS",
      placa: "EPI-7D47",
      rota: "1.7km",
      diaria: "3.4km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "SILVIO SOUZA DE OLIVEIRA ",
      placa: "DBL-1863"
    },
    {
      nomeproprietario: "SUZANA GASPAR DE SOUZA",
      placa: "DPC-2787",
      rota: "3.3km",
      diaria: "9.9km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "TAMIRES GONCALVES DA SILVA",
      placa: "DGV-1016",
      rota: "7.5km",
      diaria: "15km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "TIAGO ARAUJO SA TELES",
      placa: "JRD-5947",
      rota: "FIXO ",
      diaria: "FIXO",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "UEBERSON CASTRO DE SOUZA",
      placa: "JPX-9664",
      rota: "21.7km",
      diaria: "43.4km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "UÉLISON VIANA DOS SANTOS",
      placa: "DUP-8D55",
      rota: "12.3km",
      diaria: "24.6km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "UELITON TEIXEIRA DE ARAUJO",
      placa: "NTG-9079"
    },
    {
      nomeproprietario: "UEMERSOM MENDES PINA",
      placa: "DTA9G90",
      rota: "16.1km 41km ",
      diaria: "74.2km",
      turno: "Matutino e Vespertino"
    },
    {
      nomeproprietario: "VANDERLEY SANTOS OLIVEIRA",
      placa: "PYR-2917"
    },
    {
      nomeproprietario: "VANGE PEREIRA DOS SANTOS ",
      placa: "LOH-6351"
    },
    {
      nomeproprietario: "VENILSON FERREIRA DE SOUZA ",
      placa: "KNL-2861"
    },
    {
      nomeproprietario: "VIDEVAL FRANCISCO ANTUNES ",
      placa: "JOZ-6985",
      rota: "11.9km",
      diaria: "23.8km",
      turno: "Matutino"
    },
    {
      nomeproprietario: "YURE MATEUS ARAUJO DE OLIVEIRA",
      placa: "GXS-1A10"
    },
    {
      nomeproprietario: "YURI OLIVEIRA SOUZA",
      placa: "BPC-2790"
    },
    {
      nomeproprietario: "ZAIANO OLIVEIRA",
      placa: "CTK - 1102"
    },
    {
      nomeproprietario: "ZEMARIO ALVES DE SOUZA",
      placa: "JJZ-5913",
      rota: "11.3km",
      diaria: "22.6km",
      turno: "Vespertino"
    },
    {
      nomeproprietario: "ZENOBIO PEREIRA DE SOUZA ",
      placa: "PKF-6725",
      rota: "22km",
      diaria: "44km",
      turno: "Vespertino"
    },
    {
      placa: "JOV7D27",
      rota: "21.2km",
      diaria: "42.4km",
      turno: "Vespertino"
    },
    {
      placa: "LOF9089",
      rota: "8.4km 4.2km",
      diaria: "29.4km",
      turno: "Matutino e Vespertino"
    },
    {
      placa: "CLJ-7877"
    },
    {
      placa: "DFY-7985"
    },
    {
      placa: "DRA-1A93"
    },
    {
      placa: "FHB1F38",
      rota: "2.7km",
      diaria: "5.4km",
      turno: "Vespertino"
    },
    {
      placa: "FYM6G8D"
    },
    {
      placa: "HRM5822"
    },
    {
      placa: "JOP5290"
    },
    {
      placa: "JOZ3G85",
      rota: "1.5km",
      diaria: "6km",
      turno: "Matutino e Vespertino"
    },
    {
      placa: "JQY-2925"
    },
    {
      placa: "CLJ-2419"
    },
    {
      placa: "COI8D82"
    },
    {
      placa: "DYC2G28"
    }
  ]

  let contador = 0;

  return (
    <>
      {DadosInfo.map((item) => {
        contador++;
        return <Relatorio
          nome={item.nomeproprietario}
          placa={item.placa}
          rota={item.rota}
          diaria={item.diaria}
          turnos={item.turno}
          foto={imagens[contador - 1]}
          indicador={contador}
        />
      })}
    </>
  );
};

export default App;
