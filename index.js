const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token'NzQ4ODMxNjQxNjA2MjkxNTA3.X0jJzw.6l9jBBJyQp7G2IInrTpQUkdVajE';
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "서버인원"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '!샘플 란쿨루스') {
    return message.reply('란쿨루스 특성:매직가드 도구:먹다남은음식,자뭉열매 성격:대담 개채:31 0 31 31 31 노력치: 252 0 252 0 4 0 !어시스트파워 !녹기(교배기) !명상 !HP회복');
  }

  if(message.content == '!샘플 뽀록나') {
    return message.reply('뽀록나@검은진흙 특성:재생력 성격:대담 공down 방up 노력치:h252 b128 d128 !기가드레인 !버섯포자 !맹독 !광합성');
  }

  if(message.content == '!샘플 대짱이') {
    return message.reply('대짱이@기합의 띠(절.대.존.버.해) 노력치:공252 스피드 252 1.카운터(풀타입 컷용?) 2.죽기살기(카운터로 풀타입 컷하고 다음 스핏 느린 친구 1만드는 용) 3.전광석화 4.탁류(스피드 떨구기용)');
  }

  if(message.content == '!샘플 버터플') {
    return message.reply('버터플 특성:복안 개채:31 0 31 31 31 31 노력치:0 0 4 252 0 252 도구:기합의띠 !폭풍 !벌래의 야단법서,꽃가루경단 !수면가루 !나비춤');
  }

  if(message.content == '!샘플 몰드류') {
    return message.reply('몰드류 @기합의띠 명랑 / 틀깨기(H) 6V / AS252 B4 지진 아이언헤드 암석봉인 스텔스록');
  }

  if(message.content == '!샘플 따라큐') {
    return message.reply('따라큐 @생명의구슬 명랑 / 탈 6V / AS252 H4 치근거리기 고스트다이브 칼춤 야습');
  }

  if(message.content == '!샘플 님피아') {
    return message.reply('님피아 @먹다남은음식 대담 / 페어리스킨(H) 공Z / H252 B228 S28 하이퍼보이스 하품 매지컬플레임 명상');
  }

  if(message.content == '!샘플 누오') {
    return message.reply('누오 @먹다남은음식 대담 / 천진(H) 공Z / HB252 D4 열탕 비축하기 HP회복 하품or맹독');
  }

  if(message.content == '!샘플 아이앤트') {
    return message.reply('아이앤트 @생명의구슬 명랑 / 의욕 6V / AS252 H4 아이언헤드 번개엄니 엄청난힘 만나자마자');
  }

  if(message.content == '!샘플 에리본') {
    return message.reply('에리본(암컷사용권장) @기합의띠 특성:스위트베일or인분 노력치:cs252h6 성격:조심!문포스or꽃가루경단!거짓울음or끈적끈적네트!애교부리기or저리가루!헤롱헤롱');
  }

  if(message.content == '!샘플 암팰리스') {
    return message.reply('암팰리스 @기합의띠 특성:깨어진갑옷(드특) 노력치:ha252s6 성격:성급 !카운터(꼬지모 유전기) !암석포or다른바위기술 !지진 !버티기');
  }

  if(message.content == '!샘플 단단지') {
    return message.reply('단단지 @자뭉열매or다른열매 특성:옹골참 노력치h252 b126 d126 a6 성격:장난or신중or무사태평or건방 !스텔스록 !끈적끈적네트 !암석봉인 !앵콜or아이언롤러');
  }

  if(message.content == '!샘플 잠만보') {
    return message.reply('잠만보 @무화열매 장난꾸러기or고집 / 먹보(H) 6V / HB252 D4 or AB252 D4 누르기 히트스탬프 저주 리사이클');
  }

  if(message.content == '!샘플 삼삼드래') {
    return message.reply('삼삼드래 @구애안경 겁쟁이 / 부유 공Z / CS252 D4 용성군 악의파동 불대문자 유턴');
  }

  if(message.content == '!샘플 불비달마') {
    return message.reply('불비달마 @구애스카프 명랑 / 무아지경 6V / H4 AS252 고드름떨구기 플레어드라이브 엄청난힘 유턴');
  }

  if(message.content == '!샘플 파치래곤') {
    return message.reply('파치래곤 @약점보험 고집 / 의욕 6V / H116 A244 BD4 S140 전격부리 역린 제비반환 불꽃엄니');
  }
 
  if(message.content == '!샘플 라프라스') {
    return message.reply('라프라스 @빛의점토 조심 / 조가비갑옷 공Z / H12 B76 C196 D4 S220 물거품아리아 프리즈드라이 번개 절대영도');
  }

  if(message.content == '!샘플 파르셀') {
    return message.reply('파르셀 @기합의띠 고집 / 스킬링크 6V / AS252 H4 껍질깨기 고드름침 락블레스트 얼음뭉치');
  }

  if(message.content == '!샘플 파르토') {
    return message.reply('파르토 @기합의띠 고집 / 천하장사(H) 6V / AS252 H4 지진 번개펀치 전광석화 바둥바둥');
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

client.login(token);