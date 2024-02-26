import type { Meta, StoryObj } from '@storybook/react'
import { TopNav } from './TopNav'
import { Button } from '../../components/Button/Button'
import { PlusIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof TopNav> = {
  title: 'Deprecated/TopNav',
  component: TopNav,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

const NavLinks = [
  {
    title: 'Weekly',
    link: '#',
    active: true,
  },
  {
    title: 'Monthly',
    link: '#',
    active: false,
  },
  {
    title: 'Single',
    link: '#',
    active: false,
  },
]

const MobileLinks = [
  {
    title: 'Home',
    link: '#',
    active: false,
  },
  {
    title: 'Event',
    link: '#',
    active: false,
  },
]

const user = {
  image: {
    src: 'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
    alt: '',
  },
  firstName: 'Web',
  lastName: 'Services',
}

const userMenuItems = [
  {
    href: '/profile',
    title: 'Profile',
    icon: 'UserCircleIcon',
  },
  {
    href: '/settings',
    title: 'Settings',
    onClick: () => alert('Dropdown for settings has been clicked '),
    icon: 'Cog8ToothIcon',
  },
  {
    href: '/signout',
    title: 'Sign out ',
    icon: 'ArrowLeftOnRectangleIcon',
  },
]

const database = [
  {
    id: 1,
    title: 'Floyd',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    url: 'http://privacy.gov.au/leo/odio/condimentum/id/luctus.html?magna=in&vulputate=tempus&luctus=sit&cum=amet&sociis=sem&natoque=fusce&penatibus=consequat&et=nulla&magnis=nisl&dis=nunc&parturient=nisl&montes=duis&nascetur=bibendum&ridiculus=felis&mus=sed&vivamus=interdum&vestibulum=venenatis&sagittis=turpis&sapien=enim&cum=blandit&sociis=mi&natoque=in&penatibus=porttitor&et=pede&magnis=justo&dis=eu&parturient=massa&montes=donec&nascetur=dapibus&ridiculus=duis&mus=at&etiam=velit&vel=eu&augue=est&vestibulum=congue&rutrum=elementum&rutrum=in&neque=hac&aenean=habitasse&auctor=platea&gravida=dictumst&sem=morbi&praesent=vestibulum&id=velit&massa=id&id=pretium&nisl=iaculis&venenatis=diam&lacinia=erat&aenean=fermentum&sit=justo&amet=nec&justo=condimentum&morbi=neque&ut=sapien&odio=placerat&cras=ante&mi=nulla&pede=justo&malesuada=aliquam&in=quis&imperdiet=turpis&et=eget&commodo=elit&vulputate=sodales&justo=scelerisque',
  },
  {
    id: 2,
    title: 'Lorelle',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    url: 'https://who.int/scelerisque/quam/turpis/adipiscing/lorem/vitae/mattis.png?metus=ut&arcu=ultrices&adipiscing=vel&molestie=augue&hendrerit=vestibulum&at=ante&vulputate=ipsum&vitae=primis&nisl=in&aenean=faucibus&lectus=orci&pellentesque=luctus&eget=et&nunc=ultrices&donec=posuere&quis=cubilia&orci=curae&eget=donec&orci=pharetra&vehicula=magna&condimentum=vestibulum&curabitur=aliquet&in=ultrices&libero=erat&ut=tortor&massa=sollicitudin&volutpat=mi&convallis=sit&morbi=amet&odio=lobortis&odio=sapien&elementum=sapien&eu=non&interdum=mi&eu=integer&tincidunt=ac&in=neque&leo=duis&maecenas=bibendum&pulvinar=morbi&lobortis=non&est=quam&phasellus=nec&sit=dui&amet=luctus&erat=rutrum&nulla=nulla&tempus=tellus&vivamus=in&in=sagittis&felis=dui&eu=vel&sapien=nisl&cursus=duis&vestibulum=ac&proin=nibh&eu=fusce&mi=lacus&nulla=purus&ac=aliquet&enim=at&in=feugiat&tempor=non&turpis=pretium&nec=quis&euismod=lectus&scelerisque=suspendisse&quam=potenti&turpis=in&adipiscing=eleifend&lorem=quam&vitae=a&mattis=odio&nibh=in&ligula=hac&nec=habitasse&sem=platea',
  },
  {
    id: 3,
    title: 'Tommie',
    description: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    url: 'http://phpbb.com/quam.jsp?blandit=rutrum&non=rutrum&interdum=neque&in=aenean&ante=auctor&vestibulum=gravida&ante=sem&ipsum=praesent&primis=id&in=massa&faucibus=id&orci=nisl&luctus=venenatis&et=lacinia&ultrices=aenean&posuere=sit&cubilia=amet&curae=justo&duis=morbi&faucibus=ut&accumsan=odio&odio=cras&curabitur=mi&convallis=pede&duis=malesuada&consequat=in&dui=imperdiet',
  },
  {
    id: 4,
    title: 'Kenneth',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    url: 'https://vinaora.com/morbi/vel/lectus/in.json?elementum=ipsum&in=praesent&hac=blandit&habitasse=lacinia&platea=erat',
  },
  {
    id: 5,
    title: 'Sanson',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    url: 'http://telegraph.co.uk/egestas/metus/aenean.xml?sed=sociis&interdum=natoque&venenatis=penatibus&turpis=et&enim=magnis&blandit=dis&mi=parturient&in=montes&porttitor=nascetur&pede=ridiculus&justo=mus&eu=vivamus&massa=vestibulum&donec=sagittis&dapibus=sapien&duis=cum&at=sociis&velit=natoque&eu=penatibus&est=et&congue=magnis&elementum=dis&in=parturient&hac=montes&habitasse=nascetur&platea=ridiculus&dictumst=mus&morbi=etiam&vestibulum=vel&velit=augue&id=vestibulum&pretium=rutrum&iaculis=rutrum&diam=neque&erat=aenean&fermentum=auctor&justo=gravida&nec=sem&condimentum=praesent&neque=id&sapien=massa&placerat=id&ante=nisl&nulla=venenatis&justo=lacinia&aliquam=aenean&quis=sit&turpis=amet&eget=justo&elit=morbi&sodales=ut&scelerisque=odio&mauris=cras&sit=mi&amet=pede&eros=malesuada&suspendisse=in&accumsan=imperdiet&tortor=et&quis=commodo&turpis=vulputate&sed=justo&ante=in&vivamus=blandit&tortor=ultrices&duis=enim&mattis=lorem&egestas=ipsum&metus=dolor&aenean=sit&fermentum=amet&donec=consectetuer&ut=adipiscing&mauris=elit&eget=proin&massa=interdum&tempor=mauris&convallis=non&nulla=ligula&neque=pellentesque&libero=ultrices&convallis=phasellus&eget=id&eleifend=sapien&luctus=in&ultricies=sapien&eu=iaculis&nibh=congue&quisque=vivamus&id=metus&justo=arcu&sit=adipiscing&amet=molestie&sapien=hendrerit&dignissim=at&vestibulum=vulputate&vestibulum=vitae&ante=nisl&ipsum=aenean&primis=lectus',
  },
  {
    id: 6,
    title: 'Daryl',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    url: 'http://usnews.com/erat/fermentum/justo.xml?sit=orci&amet=eget&turpis=orci&elementum=vehicula&ligula=condimentum&vehicula=curabitur&consequat=in&morbi=libero&a=ut&ipsum=massa&integer=volutpat&a=convallis&nibh=morbi&in=odio&quis=odio&justo=elementum&maecenas=eu&rhoncus=interdum&aliquam=eu&lacus=tincidunt&morbi=in&quis=leo&tortor=maecenas&id=pulvinar&nulla=lobortis&ultrices=est&aliquet=phasellus&maecenas=sit&leo=amet&odio=erat&condimentum=nulla',
  },
  {
    id: 7,
    title: 'Julee',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    url: 'http://woothemes.com/maecenas/rhoncus/aliquam/lacus/morbi.jpg?id=aliquam&lobortis=augue&convallis=quam&tortor=sollicitudin&risus=vitae&dapibus=consectetuer&augue=eget&vel=rutrum&accumsan=at&tellus=lorem&nisi=integer&eu=tincidunt&orci=ante&mauris=vel&lacinia=ipsum&sapien=praesent&quis=blandit&libero=lacinia&nullam=erat&sit=vestibulum&amet=sed&turpis=magna&elementum=at&ligula=nunc&vehicula=commodo&consequat=placerat&morbi=praesent&a=blandit&ipsum=nam&integer=nulla&a=integer&nibh=pede&in=justo&quis=lacinia&justo=eget&maecenas=tincidunt&rhoncus=eget&aliquam=tempus&lacus=vel&morbi=pede&quis=morbi&tortor=porttitor&id=lorem&nulla=id&ultrices=ligula&aliquet=suspendisse&maecenas=ornare&leo=consequat&odio=lectus&condimentum=in&id=est&luctus=risus&nec=auctor&molestie=sed&sed=tristique&justo=in&pellentesque=tempus&viverra=sit&pede=amet&ac=sem&diam=fusce&cras=consequat&pellentesque=nulla&volutpat=nisl&dui=nunc&maecenas=nisl&tristique=duis&est=bibendum&et=felis&tempus=sed&semper=interdum&est=venenatis&quam=turpis&pharetra=enim&magna=blandit&ac=mi&consequat=in&metus=porttitor',
  },
  {
    id: 8,
    title: 'Buddie',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    url: 'http://chron.com/eget/tincidunt/eget.xml?a=aliquet&ipsum=at&integer=feugiat&a=non&nibh=pretium&in=quis&quis=lectus&justo=suspendisse&maecenas=potenti&rhoncus=in&aliquam=eleifend&lacus=quam&morbi=a&quis=odio&tortor=in&id=hac&nulla=habitasse&ultrices=platea&aliquet=dictumst&maecenas=maecenas&leo=ut&odio=massa&condimentum=quis&id=augue&luctus=luctus&nec=tincidunt&molestie=nulla&sed=mollis&justo=molestie&pellentesque=lorem&viverra=quisque&pede=ut&ac=erat&diam=curabitur&cras=gravida&pellentesque=nisi&volutpat=at&dui=nibh&maecenas=in&tristique=hac&est=habitasse&et=platea&tempus=dictumst&semper=aliquam&est=augue&quam=quam&pharetra=sollicitudin&magna=vitae&ac=consectetuer&consequat=eget&metus=rutrum&sapien=at&ut=lorem&nunc=integer&vestibulum=tincidunt&ante=ante&ipsum=vel&primis=ipsum&in=praesent&faucibus=blandit&orci=lacinia&luctus=erat&et=vestibulum&ultrices=sed&posuere=magna&cubilia=at&curae=nunc&mauris=commodo&viverra=placerat&diam=praesent&vitae=blandit&quam=nam&suspendisse=nulla&potenti=integer&nullam=pede&porttitor=justo&lacus=lacinia&at=eget&turpis=tincidunt&donec=eget',
  },
  {
    id: 9,
    title: 'Damiano',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    url: 'https://blogspot.com/lorem/ipsum/dolor/sit/amet/consectetuer.jpg?mus=vestibulum&etiam=sed&vel=magna&augue=at&vestibulum=nunc&rutrum=commodo&rutrum=placerat&neque=praesent',
  },
  {
    id: 10,
    title: 'Murvyn',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    url: 'http://123-reg.co.uk/convallis/nulla/neque/libero/convallis/eget.jpg?adipiscing=duis&elit=aliquam&proin=convallis&interdum=nunc&mauris=proin&non=at&ligula=turpis&pellentesque=a&ultrices=pede&phasellus=posuere&id=nonummy&sapien=integer&in=non&sapien=velit&iaculis=donec&congue=diam&vivamus=neque&metus=vestibulum&arcu=eget&adipiscing=vulputate&molestie=ut&hendrerit=ultrices&at=vel&vulputate=augue&vitae=vestibulum&nisl=ante&aenean=ipsum&lectus=primis&pellentesque=in&eget=faucibus&nunc=orci&donec=luctus&quis=et&orci=ultrices&eget=posuere&orci=cubilia&vehicula=curae&condimentum=donec&curabitur=pharetra&in=magna&libero=vestibulum&ut=aliquet&massa=ultrices&volutpat=erat&convallis=tortor&morbi=sollicitudin&odio=mi&odio=sit&elementum=amet&eu=lobortis&interdum=sapien&eu=sapien&tincidunt=non&in=mi&leo=integer&maecenas=ac&pulvinar=neque&lobortis=duis&est=bibendum&phasellus=morbi&sit=non&amet=quam&erat=nec&nulla=dui&tempus=luctus&vivamus=rutrum&in=nulla&felis=tellus&eu=in&sapien=sagittis&cursus=dui&vestibulum=vel&proin=nisl&eu=duis&mi=ac&nulla=nibh&ac=fusce&enim=lacus&in=purus&tempor=aliquet&turpis=at&nec=feugiat&euismod=non&scelerisque=pretium&quam=quis&turpis=lectus&adipiscing=suspendisse&lorem=potenti&vitae=in&mattis=eleifend&nibh=quam&ligula=a&nec=odio',
  },
  {
    id: 11,
    title: 'Gaile',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    url: 'http://forbes.com/montes/nascetur/ridiculus/mus.jsp?amet=condimentum&sem=neque&fusce=sapien&consequat=placerat&nulla=ante&nisl=nulla&nunc=justo&nisl=aliquam&duis=quis&bibendum=turpis&felis=eget&sed=elit&interdum=sodales&venenatis=scelerisque&turpis=mauris&enim=sit&blandit=amet&mi=eros&in=suspendisse&porttitor=accumsan&pede=tortor&justo=quis&eu=turpis&massa=sed&donec=ante&dapibus=vivamus&duis=tortor&at=duis&velit=mattis&eu=egestas&est=metus&congue=aenean&elementum=fermentum&in=donec&hac=ut&habitasse=mauris&platea=eget&dictumst=massa&morbi=tempor&vestibulum=convallis&velit=nulla&id=neque&pretium=libero&iaculis=convallis&diam=eget&erat=eleifend&fermentum=luctus&justo=ultricies&nec=eu&condimentum=nibh&neque=quisque&sapien=id&placerat=justo&ante=sit&nulla=amet&justo=sapien&aliquam=dignissim&quis=vestibulum&turpis=vestibulum&eget=ante&elit=ipsum&sodales=primis',
  },
  {
    id: 12,
    title: 'Mendie',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    url: 'http://time.com/etiam/justo/etiam/pretium/iaculis/justo/in.jsp?molestie=nec&sed=nisi&justo=vulputate&pellentesque=nonummy&viverra=maecenas&pede=tincidunt&ac=lacus&diam=at&cras=velit&pellentesque=vivamus&volutpat=vel&dui=nulla&maecenas=eget&tristique=eros&est=elementum&et=pellentesque&tempus=quisque&semper=porta&est=volutpat&quam=erat&pharetra=quisque&magna=erat&ac=eros&consequat=viverra&metus=eget&sapien=congue&ut=eget&nunc=semper&vestibulum=rutrum&ante=nulla&ipsum=nunc&primis=purus&in=phasellus&faucibus=in',
  },
  {
    id: 13,
    title: 'Kincaid',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    url: 'https://illinois.edu/faucibus/orci/luctus/et/ultrices.jpg?sem=libero&mauris=quis&laoreet=orci&ut=nullam&rhoncus=molestie&aliquet=nibh&pulvinar=in&sed=lectus&nisl=pellentesque&nunc=at&rhoncus=nulla&dui=suspendisse&vel=potenti&sem=cras&sed=in&sagittis=purus&nam=eu&congue=magna&risus=vulputate&semper=luctus&porta=cum&volutpat=sociis&quam=natoque&pede=penatibus&lobortis=et&ligula=magnis&sit=dis&amet=parturient&eleifend=montes&pede=nascetur&libero=ridiculus&quis=mus&orci=vivamus&nullam=vestibulum&molestie=sagittis&nibh=sapien&in=cum&lectus=sociis&pellentesque=natoque&at=penatibus&nulla=et&suspendisse=magnis&potenti=dis&cras=parturient&in=montes&purus=nascetur&eu=ridiculus&magna=mus&vulputate=etiam&luctus=vel&cum=augue&sociis=vestibulum&natoque=rutrum&penatibus=rutrum&et=neque&magnis=aenean&dis=auctor&parturient=gravida&montes=sem&nascetur=praesent&ridiculus=id&mus=massa&vivamus=id&vestibulum=nisl&sagittis=venenatis&sapien=lacinia&cum=aenean&sociis=sit&natoque=amet&penatibus=justo&et=morbi&magnis=ut&dis=odio&parturient=cras&montes=mi&nascetur=pede&ridiculus=malesuada&mus=in&etiam=imperdiet&vel=et&augue=commodo&vestibulum=vulputate&rutrum=justo&rutrum=in&neque=blandit&aenean=ultrices&auctor=enim',
  },
  {
    id: 14,
    title: 'Tracie',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    url: 'https://unicef.org/hendrerit/at/vulputate/vitae/nisl/aenean.png?tellus=nibh&nisi=in&eu=quis&orci=justo&mauris=maecenas&lacinia=rhoncus&sapien=aliquam&quis=lacus&libero=morbi&nullam=quis&sit=tortor&amet=id&turpis=nulla&elementum=ultrices&ligula=aliquet&vehicula=maecenas&consequat=leo&morbi=odio&a=condimentum&ipsum=id&integer=luctus&a=nec&nibh=molestie&in=sed&quis=justo&justo=pellentesque&maecenas=viverra&rhoncus=pede&aliquam=ac&lacus=diam&morbi=cras&quis=pellentesque&tortor=volutpat&id=dui&nulla=maecenas&ultrices=tristique&aliquet=est&maecenas=et&leo=tempus&odio=semper&condimentum=est&id=quam&luctus=pharetra&nec=magna&molestie=ac&sed=consequat&justo=metus&pellentesque=sapien&viverra=ut&pede=nunc&ac=vestibulum&diam=ante',
  },
  {
    id: 15,
    title: 'Michal',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    url: 'https://t.co/ornare/consequat/lectus/in/est/risus/auctor.jsp?est=sem&lacinia=fusce&nisi=consequat&venenatis=nulla&tristique=nisl&fusce=nunc&congue=nisl&diam=duis&id=bibendum&ornare=felis&imperdiet=sed&sapien=interdum&urna=venenatis&pretium=turpis&nisl=enim&ut=blandit&volutpat=mi&sapien=in&arcu=porttitor&sed=pede&augue=justo&aliquam=eu&erat=massa&volutpat=donec&in=dapibus&congue=duis&etiam=at&justo=velit&etiam=eu&pretium=est&iaculis=congue&justo=elementum&in=in&hac=hac&habitasse=habitasse&platea=platea&dictumst=dictumst&etiam=morbi',
  },
  {
    id: 16,
    title: 'Eleanor',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    url: 'http://lycos.com/blandit/nam/nulla.jsp?ante=nec&vestibulum=molestie&ante=sed&ipsum=justo&primis=pellentesque&in=viverra&faucibus=pede&orci=ac&luctus=diam&et=cras&ultrices=pellentesque&posuere=volutpat&cubilia=dui&curae=maecenas&duis=tristique&faucibus=est&accumsan=et&odio=tempus&curabitur=semper&convallis=est&duis=quam&consequat=pharetra&dui=magna&nec=ac&nisi=consequat&volutpat=metus&eleifend=sapien&donec=ut&ut=nunc&dolor=vestibulum&morbi=ante&vel=ipsum&lectus=primis&in=in&quam=faucibus&fringilla=orci&rhoncus=luctus&mauris=et&enim=ultrices&leo=posuere&rhoncus=cubilia&sed=curae&vestibulum=mauris&sit=viverra&amet=diam&cursus=vitae&id=quam&turpis=suspendisse&integer=potenti&aliquet=nullam&massa=porttitor&id=lacus&lobortis=at&convallis=turpis&tortor=donec&risus=posuere&dapibus=metus&augue=vitae&vel=ipsum&accumsan=aliquam&tellus=non&nisi=mauris&eu=morbi&orci=non&mauris=lectus&lacinia=aliquam&sapien=sit&quis=amet&libero=diam&nullam=in&sit=magna&amet=bibendum&turpis=imperdiet&elementum=nullam&ligula=orci&vehicula=pede&consequat=venenatis&morbi=non&a=sodales&ipsum=sed&integer=tincidunt&a=eu&nibh=felis&in=fusce&quis=posuere&justo=felis&maecenas=sed&rhoncus=lacus&aliquam=morbi',
  },
  {
    id: 17,
    title: 'Mozes',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    url: 'https://mysql.com/sapien/placerat.aspx?curabitur=elementum&in=ligula&libero=vehicula&ut=consequat&massa=morbi&volutpat=a&convallis=ipsum&morbi=integer&odio=a&odio=nibh&elementum=in&eu=quis&interdum=justo&eu=maecenas&tincidunt=rhoncus&in=aliquam&leo=lacus&maecenas=morbi&pulvinar=quis&lobortis=tortor&est=id&phasellus=nulla&sit=ultrices',
  },
  {
    id: 18,
    title: 'Linnell',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    url: 'http://soundcloud.com/vestibulum.js?magnis=velit&dis=nec&parturient=nisi&montes=vulputate&nascetur=nonummy&ridiculus=maecenas&mus=tincidunt&vivamus=lacus&vestibulum=at&sagittis=velit&sapien=vivamus&cum=vel&sociis=nulla&natoque=eget&penatibus=eros&et=elementum&magnis=pellentesque&dis=quisque&parturient=porta&montes=volutpat&nascetur=erat&ridiculus=quisque&mus=erat&etiam=eros&vel=viverra&augue=eget&vestibulum=congue&rutrum=eget&rutrum=semper&neque=rutrum&aenean=nulla&auctor=nunc&gravida=purus&sem=phasellus&praesent=in&id=felis&massa=donec&id=semper&nisl=sapien&venenatis=a&lacinia=libero&aenean=nam&sit=dui&amet=proin&justo=leo&morbi=odio&ut=porttitor&odio=id&cras=consequat&mi=in&pede=consequat&malesuada=ut&in=nulla&imperdiet=sed&et=accumsan&commodo=felis&vulputate=ut&justo=at&in=dolor&blandit=quis&ultrices=odio&enim=consequat&lorem=varius&ipsum=integer&dolor=ac&sit=leo&amet=pellentesque&consectetuer=ultrices',
  },
  {
    id: 19,
    title: 'Leonardo',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    url: 'http://mlb.com/morbi/ut.jsp?in=id&libero=ornare&ut=imperdiet&massa=sapien&volutpat=urna&convallis=pretium&morbi=nisl&odio=ut&odio=volutpat&elementum=sapien&eu=arcu&interdum=sed&eu=augue&tincidunt=aliquam&in=erat&leo=volutpat&maecenas=in&pulvinar=congue&lobortis=etiam&est=justo&phasellus=etiam&sit=pretium&amet=iaculis&erat=justo&nulla=in&tempus=hac&vivamus=habitasse&in=platea&felis=dictumst&eu=etiam&sapien=faucibus&cursus=cursus&vestibulum=urna&proin=ut&eu=tellus&mi=nulla&nulla=ut&ac=erat&enim=id&in=mauris&tempor=vulputate&turpis=elementum&nec=nullam&euismod=varius&scelerisque=nulla&quam=facilisi&turpis=cras&adipiscing=non&lorem=velit&vitae=nec&mattis=nisi&nibh=vulputate&ligula=nonummy&nec=maecenas&sem=tincidunt&duis=lacus&aliquam=at&convallis=velit&nunc=vivamus&proin=vel&at=nulla',
  },
  {
    id: 20,
    title: 'Jeannie',
    description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    url: 'https://wikimedia.org/velit/vivamus/vel/nulla/eget/eros.jpg?eget=rhoncus&semper=dui&rutrum=vel&nulla=sem&nunc=sed&purus=sagittis&phasellus=nam&in=congue&felis=risus&donec=semper&semper=porta&sapien=volutpat&a=quam&libero=pede&nam=lobortis&dui=ligula&proin=sit&leo=amet&odio=eleifend&porttitor=pede&id=libero&consequat=quis&in=orci&consequat=nullam&ut=molestie&nulla=nibh&sed=in',
  },
  {
    id: 21,
    title: 'Camile',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    url: 'http://cafepress.com/ligula/vehicula/consequat/morbi/a.json?vel=leo&sem=rhoncus&sed=sed&sagittis=vestibulum&nam=sit&congue=amet&risus=cursus&semper=id&porta=turpis&volutpat=integer&quam=aliquet&pede=massa&lobortis=id&ligula=lobortis&sit=convallis&amet=tortor&eleifend=risus&pede=dapibus&libero=augue&quis=vel&orci=accumsan&nullam=tellus&molestie=nisi&nibh=eu&in=orci&lectus=mauris&pellentesque=lacinia',
  },
  {
    id: 22,
    title: 'Polly',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    url: 'http://home.pl/libero/non.png?a=eget&feugiat=tincidunt&et=eget&eros=tempus&vestibulum=vel&ac=pede&est=morbi&lacinia=porttitor&nisi=lorem&venenatis=id&tristique=ligula&fusce=suspendisse&congue=ornare&diam=consequat&id=lectus&ornare=in&imperdiet=est&sapien=risus&urna=auctor&pretium=sed&nisl=tristique&ut=in&volutpat=tempus&sapien=sit&arcu=amet&sed=sem&augue=fusce&aliquam=consequat&erat=nulla&volutpat=nisl&in=nunc&congue=nisl&etiam=duis',
  },
  {
    id: 23,
    title: 'Giffie',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    url: 'https://live.com/porta/volutpat/quam/pede/lobortis/ligula.png?et=vel&ultrices=nulla&posuere=eget&cubilia=eros',
  },
  {
    id: 24,
    title: 'Patty',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    url: 'http://about.com/nunc/donec/quis/orci/eget/orci/vehicula.js?nam=faucibus&congue=accumsan',
  },
  {
    id: 25,
    title: 'Sheilakathryn',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    url: 'http://forbes.com/interdum/in/ante.jsp?pede=id&justo=nulla&eu=ultrices&massa=aliquet&donec=maecenas&dapibus=leo&duis=odio&at=condimentum&velit=id&eu=luctus&est=nec&congue=molestie&elementum=sed&in=justo&hac=pellentesque&habitasse=viverra&platea=pede&dictumst=ac&morbi=diam&vestibulum=cras&velit=pellentesque&id=volutpat&pretium=dui',
  },
  {
    id: 26,
    title: 'Carlen',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    url: 'http://moonfruit.com/diam/vitae.js?ante=magna&vestibulum=vestibulum&ante=aliquet&ipsum=ultrices&primis=erat&in=tortor&faucibus=sollicitudin&orci=mi',
  },
  {
    id: 27,
    title: 'Sigfried',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    url: 'https://hp.com/imperdiet/nullam/orci/pede/venenatis.xml?viverra=convallis&eget=eget&congue=eleifend&eget=luctus&semper=ultricies&rutrum=eu&nulla=nibh&nunc=quisque&purus=id&phasellus=justo&in=sit&felis=amet&donec=sapien&semper=dignissim&sapien=vestibulum&a=vestibulum&libero=ante&nam=ipsum&dui=primis&proin=in&leo=faucibus&odio=orci&porttitor=luctus&id=et&consequat=ultrices&in=posuere&consequat=cubilia&ut=curae&nulla=nulla&sed=dapibus&accumsan=dolor&felis=vel&ut=est&at=donec&dolor=odio&quis=justo&odio=sollicitudin&consequat=ut&varius=suscipit&integer=a&ac=feugiat&leo=et&pellentesque=eros&ultrices=vestibulum&mattis=ac&odio=est&donec=lacinia&vitae=nisi&nisi=venenatis&nam=tristique&ultrices=fusce&libero=congue&non=diam&mattis=id&pulvinar=ornare&nulla=imperdiet&pede=sapien&ullamcorper=urna&augue=pretium&a=nisl&suscipit=ut&nulla=volutpat&elit=sapien&ac=arcu&nulla=sed&sed=augue&vel=aliquam',
  },
  {
    id: 28,
    title: 'Andi',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    url: 'https://mit.edu/suspendisse/potenti/in/eleifend.js?libero=massa&non=id&mattis=lobortis&pulvinar=convallis&nulla=tortor&pede=risus&ullamcorper=dapibus&augue=augue&a=vel&suscipit=accumsan&nulla=tellus&elit=nisi&ac=eu&nulla=orci&sed=mauris&vel=lacinia&enim=sapien&sit=quis&amet=libero&nunc=nullam&viverra=sit&dapibus=amet&nulla=turpis&suscipit=elementum',
  },
  {
    id: 29,
    title: 'Freddi',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    url: 'https://comcast.net/sapien/a/libero/nam/dui.jsp?quis=bibendum&orci=imperdiet&nullam=nullam&molestie=orci&nibh=pede&in=venenatis&lectus=non&pellentesque=sodales&at=sed&nulla=tincidunt&suspendisse=eu&potenti=felis&cras=fusce&in=posuere&purus=felis&eu=sed&magna=lacus&vulputate=morbi&luctus=sem&cum=mauris&sociis=laoreet&natoque=ut&penatibus=rhoncus&et=aliquet&magnis=pulvinar&dis=sed&parturient=nisl&montes=nunc&nascetur=rhoncus&ridiculus=dui&mus=vel&vivamus=sem&vestibulum=sed&sagittis=sagittis&sapien=nam&cum=congue&sociis=risus&natoque=semper&penatibus=porta&et=volutpat&magnis=quam&dis=pede&parturient=lobortis&montes=ligula&nascetur=sit&ridiculus=amet&mus=eleifend&etiam=pede&vel=libero&augue=quis&vestibulum=orci&rutrum=nullam&rutrum=molestie&neque=nibh&aenean=in&auctor=lectus&gravida=pellentesque&sem=at&praesent=nulla&id=suspendisse&massa=potenti&id=cras',
  },
  {
    id: 30,
    title: 'Mahala',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    url: 'http://ow.ly/erat/id/mauris/vulputate/elementum.json?magnis=justo&dis=maecenas&parturient=rhoncus&montes=aliquam&nascetur=lacus&ridiculus=morbi&mus=quis&vivamus=tortor&vestibulum=id&sagittis=nulla&sapien=ultrices&cum=aliquet&sociis=maecenas&natoque=leo&penatibus=odio&et=condimentum&magnis=id&dis=luctus&parturient=nec&montes=molestie&nascetur=sed&ridiculus=justo&mus=pellentesque&etiam=viverra&vel=pede&augue=ac&vestibulum=diam&rutrum=cras&rutrum=pellentesque&neque=volutpat&aenean=dui&auctor=maecenas&gravida=tristique&sem=est&praesent=et&id=tempus&massa=semper&id=est&nisl=quam&venenatis=pharetra&lacinia=magna&aenean=ac&sit=consequat&amet=metus&justo=sapien&morbi=ut&ut=nunc&odio=vestibulum&cras=ante&mi=ipsum&pede=primis&malesuada=in&in=faucibus&imperdiet=orci&et=luctus&commodo=et&vulputate=ultrices&justo=posuere&in=cubilia&blandit=curae&ultrices=mauris&enim=viverra&lorem=diam&ipsum=vitae&dolor=quam&sit=suspendisse&amet=potenti&consectetuer=nullam&adipiscing=porttitor&elit=lacus&proin=at&interdum=turpis&mauris=donec&non=posuere&ligula=metus&pellentesque=vitae&ultrices=ipsum&phasellus=aliquam&id=non&sapien=mauris&in=morbi&sapien=non&iaculis=lectus&congue=aliquam&vivamus=sit&metus=amet&arcu=diam&adipiscing=in&molestie=magna&hendrerit=bibendum&at=imperdiet&vulputate=nullam&vitae=orci&nisl=pede&aenean=venenatis&lectus=non&pellentesque=sodales',
  },
  {
    id: 31,
    title: 'Orel',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    url: 'http://unc.edu/purus/sit/amet/nulla/quisque/arcu.xml?vestibulum=velit&quam=donec&sapien=diam&varius=neque&ut=vestibulum&blandit=eget&non=vulputate&interdum=ut&in=ultrices&ante=vel&vestibulum=augue&ante=vestibulum&ipsum=ante&primis=ipsum&in=primis&faucibus=in&orci=faucibus&luctus=orci&et=luctus&ultrices=et&posuere=ultrices&cubilia=posuere&curae=cubilia&duis=curae&faucibus=donec&accumsan=pharetra&odio=magna&curabitur=vestibulum&convallis=aliquet&duis=ultrices&consequat=erat&dui=tortor&nec=sollicitudin&nisi=mi&volutpat=sit&eleifend=amet&donec=lobortis&ut=sapien&dolor=sapien&morbi=non&vel=mi&lectus=integer&in=ac&quam=neque&fringilla=duis&rhoncus=bibendum&mauris=morbi&enim=non&leo=quam&rhoncus=nec&sed=dui&vestibulum=luctus&sit=rutrum&amet=nulla&cursus=tellus&id=in&turpis=sagittis&integer=dui&aliquet=vel&massa=nisl&id=duis&lobortis=ac&convallis=nibh&tortor=fusce&risus=lacus&dapibus=purus&augue=aliquet&vel=at&accumsan=feugiat&tellus=non&nisi=pretium&eu=quis&orci=lectus&mauris=suspendisse&lacinia=potenti&sapien=in&quis=eleifend&libero=quam&nullam=a&sit=odio&amet=in&turpis=hac&elementum=habitasse',
  },
  {
    id: 32,
    title: 'Devlen',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    url: 'http://spotify.com/in/lacus/curabitur.jpg?turpis=felis&sed=sed&ante=lacus&vivamus=morbi&tortor=sem&duis=mauris&mattis=laoreet&egestas=ut&metus=rhoncus&aenean=aliquet&fermentum=pulvinar&donec=sed&ut=nisl&mauris=nunc&eget=rhoncus&massa=dui&tempor=vel&convallis=sem&nulla=sed&neque=sagittis&libero=nam&convallis=congue&eget=risus&eleifend=semper&luctus=porta&ultricies=volutpat&eu=quam&nibh=pede&quisque=lobortis&id=ligula&justo=sit&sit=amet&amet=eleifend&sapien=pede&dignissim=libero&vestibulum=quis&vestibulum=orci&ante=nullam&ipsum=molestie&primis=nibh&in=in&faucibus=lectus&orci=pellentesque&luctus=at&et=nulla&ultrices=suspendisse&posuere=potenti&cubilia=cras&curae=in&nulla=purus&dapibus=eu&dolor=magna&vel=vulputate&est=luctus&donec=cum&odio=sociis&justo=natoque&sollicitudin=penatibus&ut=et&suscipit=magnis&a=dis&feugiat=parturient&et=montes&eros=nascetur&vestibulum=ridiculus&ac=mus&est=vivamus&lacinia=vestibulum&nisi=sagittis&venenatis=sapien&tristique=cum&fusce=sociis&congue=natoque&diam=penatibus&id=et',
  },
  {
    id: 33,
    title: 'Monty',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    url: 'https://statcounter.com/orci/mauris/lacinia.aspx?id=semper&sapien=est&in=quam&sapien=pharetra&iaculis=magna&congue=ac&vivamus=consequat&metus=metus&arcu=sapien&adipiscing=ut&molestie=nunc&hendrerit=vestibulum&at=ante&vulputate=ipsum&vitae=primis&nisl=in&aenean=faucibus&lectus=orci&pellentesque=luctus&eget=et&nunc=ultrices&donec=posuere&quis=cubilia&orci=curae&eget=mauris&orci=viverra&vehicula=diam&condimentum=vitae&curabitur=quam&in=suspendisse&libero=potenti&ut=nullam&massa=porttitor&volutpat=lacus&convallis=at&morbi=turpis&odio=donec',
  },
  {
    id: 34,
    title: 'Nari',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    url: 'http://marketwatch.com/eleifend/quam/a/odio/in/hac.json?venenatis=convallis&lacinia=morbi&aenean=odio&sit=odio&amet=elementum&justo=eu&morbi=interdum&ut=eu&odio=tincidunt&cras=in&mi=leo&pede=maecenas&malesuada=pulvinar&in=lobortis&imperdiet=est&et=phasellus&commodo=sit&vulputate=amet&justo=erat&in=nulla&blandit=tempus&ultrices=vivamus&enim=in&lorem=felis&ipsum=eu&dolor=sapien&sit=cursus&amet=vestibulum&consectetuer=proin&adipiscing=eu&elit=mi&proin=nulla&interdum=ac&mauris=enim&non=in&ligula=tempor&pellentesque=turpis&ultrices=nec&phasellus=euismod&id=scelerisque&sapien=quam&in=turpis&sapien=adipiscing&iaculis=lorem&congue=vitae&vivamus=mattis&metus=nibh&arcu=ligula&adipiscing=nec&molestie=sem&hendrerit=duis&at=aliquam&vulputate=convallis&vitae=nunc&nisl=proin&aenean=at&lectus=turpis&pellentesque=a&eget=pede&nunc=posuere&donec=nonummy&quis=integer&orci=non&eget=velit&orci=donec&vehicula=diam&condimentum=neque&curabitur=vestibulum&in=eget&libero=vulputate&ut=ut&massa=ultrices&volutpat=vel&convallis=augue&morbi=vestibulum&odio=ante&odio=ipsum&elementum=primis&eu=in&interdum=faucibus&eu=orci&tincidunt=luctus',
  },
  {
    id: 35,
    title: 'Eva',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    url: 'https://google.ru/non/mattis/pulvinar/nulla/pede.json?ligula=et&suspendisse=ultrices&ornare=posuere&consequat=cubilia&lectus=curae&in=mauris&est=viverra&risus=diam&auctor=vitae&sed=quam&tristique=suspendisse&in=potenti&tempus=nullam&sit=porttitor&amet=lacus&sem=at&fusce=turpis&consequat=donec&nulla=posuere&nisl=metus&nunc=vitae&nisl=ipsum&duis=aliquam&bibendum=non&felis=mauris&sed=morbi&interdum=non&venenatis=lectus&turpis=aliquam&enim=sit&blandit=amet&mi=diam',
  },
  {
    id: 36,
    title: 'Shermy',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    url: 'http://cargocollective.com/velit/donec/diam/neque.jsp?nullam=sed&orci=interdum&pede=venenatis&venenatis=turpis&non=enim&sodales=blandit&sed=mi&tincidunt=in&eu=porttitor&felis=pede&fusce=justo&posuere=eu&felis=massa&sed=donec&lacus=dapibus&morbi=duis&sem=at&mauris=velit&laoreet=eu&ut=est&rhoncus=congue&aliquet=elementum&pulvinar=in&sed=hac&nisl=habitasse&nunc=platea&rhoncus=dictumst&dui=morbi&vel=vestibulum&sem=velit&sed=id&sagittis=pretium&nam=iaculis&congue=diam&risus=erat&semper=fermentum&porta=justo&volutpat=nec&quam=condimentum&pede=neque&lobortis=sapien&ligula=placerat&sit=ante&amet=nulla&eleifend=justo&pede=aliquam&libero=quis&quis=turpis&orci=eget&nullam=elit&molestie=sodales&nibh=scelerisque&in=mauris&lectus=sit&pellentesque=amet&at=eros&nulla=suspendisse&suspendisse=accumsan&potenti=tortor&cras=quis&in=turpis&purus=sed',
  },
  {
    id: 37,
    title: 'Olivie',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    url: 'http://oakley.com/blandit/ultrices/enim/lorem/ipsum.html?quis=at&orci=nibh&eget=in&orci=hac&vehicula=habitasse&condimentum=platea&curabitur=dictumst&in=aliquam&libero=augue&ut=quam&massa=sollicitudin&volutpat=vitae&convallis=consectetuer&morbi=eget&odio=rutrum&odio=at&elementum=lorem&eu=integer&interdum=tincidunt&eu=ante&tincidunt=vel&in=ipsum&leo=praesent&maecenas=blandit&pulvinar=lacinia&lobortis=erat&est=vestibulum&phasellus=sed&sit=magna&amet=at&erat=nunc&nulla=commodo&tempus=placerat&vivamus=praesent&in=blandit&felis=nam&eu=nulla&sapien=integer',
  },
  {
    id: 38,
    title: 'Moina',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    url: 'https://angelfire.com/aenean.jsp?parturient=tortor&montes=duis&nascetur=mattis&ridiculus=egestas&mus=metus&etiam=aenean&vel=fermentum&augue=donec&vestibulum=ut&rutrum=mauris&rutrum=eget&neque=massa&aenean=tempor&auctor=convallis&gravida=nulla&sem=neque&praesent=libero&id=convallis&massa=eget&id=eleifend&nisl=luctus&venenatis=ultricies&lacinia=eu&aenean=nibh&sit=quisque&amet=id&justo=justo&morbi=sit&ut=amet&odio=sapien&cras=dignissim&mi=vestibulum&pede=vestibulum&malesuada=ante&in=ipsum&imperdiet=primis&et=in&commodo=faucibus&vulputate=orci&justo=luctus&in=et&blandit=ultrices&ultrices=posuere&enim=cubilia&lorem=curae&ipsum=nulla&dolor=dapibus&sit=dolor&amet=vel&consectetuer=est&adipiscing=donec&elit=odio&proin=justo&interdum=sollicitudin&mauris=ut&non=suscipit&ligula=a&pellentesque=feugiat&ultrices=et&phasellus=eros&id=vestibulum&sapien=ac&in=est&sapien=lacinia&iaculis=nisi&congue=venenatis&vivamus=tristique&metus=fusce&arcu=congue&adipiscing=diam',
  },
  {
    id: 39,
    title: 'Selma',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    url: 'https://amazonaws.com/pretium/iaculis.jpg?rhoncus=porttitor&sed=lorem&vestibulum=id&sit=ligula&amet=suspendisse&cursus=ornare&id=consequat&turpis=lectus&integer=in&aliquet=est&massa=risus&id=auctor&lobortis=sed&convallis=tristique&tortor=in&risus=tempus&dapibus=sit&augue=amet&vel=sem&accumsan=fusce&tellus=consequat&nisi=nulla&eu=nisl&orci=nunc&mauris=nisl&lacinia=duis&sapien=bibendum&quis=felis&libero=sed&nullam=interdum&sit=venenatis&amet=turpis&turpis=enim&elementum=blandit&ligula=mi&vehicula=in&consequat=porttitor&morbi=pede&a=justo&ipsum=eu&integer=massa&a=donec&nibh=dapibus&in=duis&quis=at&justo=velit&maecenas=eu&rhoncus=est&aliquam=congue&lacus=elementum&morbi=in&quis=hac&tortor=habitasse&id=platea&nulla=dictumst&ultrices=morbi&aliquet=vestibulum&maecenas=velit&leo=id&odio=pretium&condimentum=iaculis&id=diam&luctus=erat&nec=fermentum&molestie=justo&sed=nec&justo=condimentum&pellentesque=neque&viverra=sapien&pede=placerat&ac=ante&diam=nulla&cras=justo&pellentesque=aliquam&volutpat=quis&dui=turpis&maecenas=eget&tristique=elit&est=sodales&et=scelerisque&tempus=mauris&semper=sit&est=amet&quam=eros&pharetra=suspendisse&magna=accumsan&ac=tortor&consequat=quis&metus=turpis&sapien=sed&ut=ante&nunc=vivamus&vestibulum=tortor&ante=duis&ipsum=mattis&primis=egestas&in=metus',
  },
  {
    id: 40,
    title: 'Raddie',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    url: 'http://123-reg.co.uk/sit/amet/cursus/id.html?nec=erat&nisi=id&vulputate=mauris&nonummy=vulputate&maecenas=elementum&tincidunt=nullam&lacus=varius&at=nulla&velit=facilisi&vivamus=cras&vel=non&nulla=velit&eget=nec&eros=nisi&elementum=vulputate&pellentesque=nonummy&quisque=maecenas&porta=tincidunt&volutpat=lacus&erat=at&quisque=velit&erat=vivamus&eros=vel&viverra=nulla&eget=eget&congue=eros&eget=elementum&semper=pellentesque&rutrum=quisque&nulla=porta&nunc=volutpat&purus=erat&phasellus=quisque&in=erat&felis=eros&donec=viverra&semper=eget&sapien=congue&a=eget&libero=semper&nam=rutrum&dui=nulla&proin=nunc&leo=purus&odio=phasellus&porttitor=in&id=felis&consequat=donec&in=semper&consequat=sapien&ut=a&nulla=libero&sed=nam&accumsan=dui&felis=proin&ut=leo',
  },
  {
    id: 41,
    title: 'Boote',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    url: 'https://mac.com/proin/eu/mi/nulla/ac.json?ligula=tincidunt&suspendisse=ante&ornare=vel&consequat=ipsum&lectus=praesent&in=blandit&est=lacinia&risus=erat&auctor=vestibulum&sed=sed&tristique=magna&in=at&tempus=nunc&sit=commodo&amet=placerat&sem=praesent&fusce=blandit&consequat=nam&nulla=nulla&nisl=integer&nunc=pede&nisl=justo&duis=lacinia&bibendum=eget&felis=tincidunt&sed=eget&interdum=tempus&venenatis=vel&turpis=pede&enim=morbi&blandit=porttitor&mi=lorem&in=id&porttitor=ligula&pede=suspendisse&justo=ornare&eu=consequat&massa=lectus&donec=in',
  },
  {
    id: 42,
    title: 'Queenie',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    url: 'http://unesco.org/enim/in.html?mauris=erat&lacinia=eros&sapien=viverra&quis=eget&libero=congue&nullam=eget&sit=semper&amet=rutrum&turpis=nulla&elementum=nunc&ligula=purus&vehicula=phasellus&consequat=in&morbi=felis&a=donec&ipsum=semper&integer=sapien&a=a&nibh=libero&in=nam&quis=dui&justo=proin&maecenas=leo&rhoncus=odio&aliquam=porttitor&lacus=id&morbi=consequat&quis=in&tortor=consequat&id=ut&nulla=nulla&ultrices=sed&aliquet=accumsan&maecenas=felis&leo=ut&odio=at&condimentum=dolor&id=quis&luctus=odio&nec=consequat&molestie=varius&sed=integer&justo=ac&pellentesque=leo&viverra=pellentesque&pede=ultrices&ac=mattis&diam=odio&cras=donec&pellentesque=vitae&volutpat=nisi&dui=nam&maecenas=ultrices&tristique=libero&est=non&et=mattis&tempus=pulvinar&semper=nulla&est=pede&quam=ullamcorper&pharetra=augue&magna=a&ac=suscipit&consequat=nulla&metus=elit&sapien=ac&ut=nulla&nunc=sed&vestibulum=vel&ante=enim&ipsum=sit&primis=amet&in=nunc&faucibus=viverra&orci=dapibus&luctus=nulla&et=suscipit&ultrices=ligula&posuere=in&cubilia=lacus&curae=curabitur&mauris=at&viverra=ipsum&diam=ac&vitae=tellus&quam=semper&suspendisse=interdum&potenti=mauris&nullam=ullamcorper&porttitor=purus',
  },
  {
    id: 43,
    title: 'Freddie',
    description: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    url: 'http://ca.gov/non.json?pede=magna&venenatis=bibendum&non=imperdiet&sodales=nullam&sed=orci&tincidunt=pede&eu=venenatis&felis=non&fusce=sodales&posuere=sed&felis=tincidunt&sed=eu&lacus=felis&morbi=fusce&sem=posuere&mauris=felis&laoreet=sed&ut=lacus&rhoncus=morbi&aliquet=sem&pulvinar=mauris&sed=laoreet&nisl=ut&nunc=rhoncus&rhoncus=aliquet&dui=pulvinar&vel=sed&sem=nisl&sed=nunc&sagittis=rhoncus&nam=dui&congue=vel&risus=sem&semper=sed&porta=sagittis&volutpat=nam&quam=congue&pede=risus&lobortis=semper&ligula=porta&sit=volutpat&amet=quam&eleifend=pede&pede=lobortis&libero=ligula&quis=sit&orci=amet&nullam=eleifend&molestie=pede&nibh=libero&in=quis&lectus=orci&pellentesque=nullam',
  },
  {
    id: 44,
    title: 'Berkley',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    url: 'http://ning.com/eget/massa/tempor/convallis.json?quam=morbi&nec=porttitor&dui=lorem&luctus=id&rutrum=ligula&nulla=suspendisse&tellus=ornare&in=consequat&sagittis=lectus&dui=in&vel=est&nisl=risus&duis=auctor&ac=sed&nibh=tristique&fusce=in&lacus=tempus&purus=sit&aliquet=amet&at=sem&feugiat=fusce&non=consequat&pretium=nulla&quis=nisl&lectus=nunc&suspendisse=nisl&potenti=duis&in=bibendum&eleifend=felis&quam=sed&a=interdum&odio=venenatis&in=turpis&hac=enim&habitasse=blandit&platea=mi&dictumst=in&maecenas=porttitor&ut=pede&massa=justo&quis=eu&augue=massa&luctus=donec&tincidunt=dapibus&nulla=duis',
  },
  {
    id: 45,
    title: 'Constancy',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    url: 'https://flickr.com/ante/nulla/justo/aliquam.json?orci=felis&mauris=ut&lacinia=at&sapien=dolor&quis=quis&libero=odio&nullam=consequat&sit=varius&amet=integer&turpis=ac&elementum=leo&ligula=pellentesque&vehicula=ultrices&consequat=mattis&morbi=odio&a=donec&ipsum=vitae&integer=nisi&a=nam&nibh=ultrices&in=libero&quis=non&justo=mattis&maecenas=pulvinar&rhoncus=nulla&aliquam=pede&lacus=ullamcorper&morbi=augue&quis=a&tortor=suscipit&id=nulla&nulla=elit&ultrices=ac&aliquet=nulla&maecenas=sed&leo=vel&odio=enim&condimentum=sit&id=amet&luctus=nunc&nec=viverra&molestie=dapibus&sed=nulla&justo=suscipit&pellentesque=ligula&viverra=in&pede=lacus&ac=curabitur&diam=at',
  },
  {
    id: 46,
    title: 'Garv',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    url: 'http://studiopress.com/pretium/iaculis/justo.html?ac=sed&tellus=nisl&semper=nunc&interdum=rhoncus&mauris=dui&ullamcorper=vel&purus=sem&sit=sed&amet=sagittis',
  },
  {
    id: 47,
    title: 'Shauna',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    url: 'http://clickbank.net/quis/turpis/sed/ante/vivamus.json?vivamus=sem&metus=praesent&arcu=id&adipiscing=massa&molestie=id&hendrerit=nisl&at=venenatis&vulputate=lacinia&vitae=aenean&nisl=sit&aenean=amet&lectus=justo&pellentesque=morbi&eget=ut&nunc=odio&donec=cras&quis=mi&orci=pede&eget=malesuada&orci=in&vehicula=imperdiet&condimentum=et&curabitur=commodo&in=vulputate&libero=justo&ut=in&massa=blandit&volutpat=ultrices&convallis=enim&morbi=lorem&odio=ipsum&odio=dolor&elementum=sit&eu=amet&interdum=consectetuer&eu=adipiscing&tincidunt=elit&in=proin&leo=interdum&maecenas=mauris&pulvinar=non&lobortis=ligula&est=pellentesque&phasellus=ultrices&sit=phasellus&amet=id&erat=sapien&nulla=in&tempus=sapien&vivamus=iaculis&in=congue&felis=vivamus&eu=metus&sapien=arcu&cursus=adipiscing&vestibulum=molestie&proin=hendrerit&eu=at&mi=vulputate&nulla=vitae&ac=nisl&enim=aenean&in=lectus&tempor=pellentesque&turpis=eget&nec=nunc&euismod=donec&scelerisque=quis&quam=orci&turpis=eget&adipiscing=orci&lorem=vehicula&vitae=condimentum&mattis=curabitur&nibh=in&ligula=libero&nec=ut&sem=massa',
  },
  {
    id: 48,
    title: 'Ansell',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    url: 'https://hostgator.com/semper/rutrum/nulla/nunc/purus/phasellus.aspx?eget=risus&orci=praesent&vehicula=lectus&condimentum=vestibulum&curabitur=quam&in=sapien&libero=varius&ut=ut&massa=blandit&volutpat=non&convallis=interdum&morbi=in&odio=ante&odio=vestibulum&elementum=ante&eu=ipsum&interdum=primis&eu=in&tincidunt=faucibus&in=orci&leo=luctus&maecenas=et&pulvinar=ultrices&lobortis=posuere&est=cubilia&phasellus=curae&sit=duis&amet=faucibus&erat=accumsan&nulla=odio&tempus=curabitur&vivamus=convallis&in=duis&felis=consequat&eu=dui&sapien=nec&cursus=nisi&vestibulum=volutpat&proin=eleifend&eu=donec&mi=ut&nulla=dolor',
  },
  {
    id: 49,
    title: 'Phebe',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    url: 'https://wikimedia.org/molestie/nibh/in/lectus/pellentesque/at/nulla.png?eget=sed&tincidunt=augue&eget=aliquam&tempus=erat&vel=volutpat&pede=in&morbi=congue&porttitor=etiam&lorem=justo&id=etiam&ligula=pretium&suspendisse=iaculis&ornare=justo&consequat=in&lectus=hac',
  },
  {
    id: 50,
    title: 'Frederic',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    url: 'https://cdbaby.com/duis/mattis/egestas.aspx?ante=purus&nulla=phasellus&justo=in&aliquam=felis&quis=donec&turpis=semper&eget=sapien&elit=a&sodales=libero&scelerisque=nam&mauris=dui&sit=proin&amet=leo&eros=odio&suspendisse=porttitor&accumsan=id&tortor=consequat&quis=in&turpis=consequat&sed=ut&ante=nulla&vivamus=sed&tortor=accumsan&duis=felis&mattis=ut&egestas=at&metus=dolor&aenean=quis&fermentum=odio&donec=consequat&ut=varius&mauris=integer&eget=ac&massa=leo&tempor=pellentesque&convallis=ultrices&nulla=mattis&neque=odio&libero=donec&convallis=vitae&eget=nisi&eleifend=nam&luctus=ultrices&ultricies=libero&eu=non&nibh=mattis&quisque=pulvinar&id=nulla',
  },
]

const mobileLogin = {
  link: '/',
  title: 'Login',
  onClick: () => alert('Login button for mobile  has been clicked '),
}

export default meta
type Story = StoryObj<typeof TopNav>

export const Default: Story = {}
Default.args = {
  children: '',
  title: 'Event',
  logoUrl: 'https://carleton.ca/',
  userMenuItems: userMenuItems,
  userInfo: user,
  mobileLinks: MobileLinks,
}

export const CustomLogo: Story = {}
CustomLogo.args = {
  title: 'Event',
  logoUrl: 'https://carleton.ca/',
  brand:
    'https://sprott.carleton.ca/wp-content/uploads/CU_Sprott_Logo_Primary_RBG_Red_Black_on_lightBG_300-1024x343.jpg',
  navLinks: NavLinks,
  userMenuItems: userMenuItems,
  userInfo: user,
}

export const HasSearch: Story = {}
HasSearch.args = {
  title: 'Event',
  navLinks: NavLinks,
  sourceData: database,
  hasSearch: true,
  userInfo: user,
  login: <Button title="Login" isSmall />,
}

export const LoginButton: Story = {}
LoginButton.args = {
  title: 'Event',
  navLinks: NavLinks,
  mobileLinks: MobileLinks,
  login: <Button title="Login" isSmall />,
  session: null,
}

export const MobileMenu: Story = {}
MobileMenu.args = {
  title: 'Event',
  navLinks: NavLinks,
  userMenuItems: userMenuItems,
  mobileLinks: MobileLinks,
  mobileLogin: mobileLogin,
  session: null,
}

export const KitchenSink: Story = {}
KitchenSink.args = {
  title: 'Event',
  logoUrl: 'https://carleton.ca/',
  navLinks: NavLinks,
  sourceData: database,
  hasSearch: true,
  userMenuItems: userMenuItems,
  userInfo: user,
  mobileLinks: MobileLinks,
  children: <Button title="Event" icon={PlusIcon} isSmall />,
  login: <Button title="Login" isSmall />,
  mobileLogin: mobileLogin,
}
