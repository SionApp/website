export interface LandingPageData {
	eventBannerData: EventBannerData
	meta: Meta
	headerData: HeaderData
	heroData: HeroData
	servicesData: ServicesData
	adventajesData: AdventajesData
	discipleshipData: DiscipleshipData
	locationData: LocationData
	servicesHoursData: ServicesHoursData
	footerData: FooterData
}

export interface HeaderData {
	logo: string
	links: Link[]
}

export interface EventBannerData {
	title: string
	subtitle: string
	image: string
}

export interface HeroData {
	title: string
	subTitle?: string
	primaryCta: string
	secondaryCta: string
	highlightedTitle: string
}

export interface ServicesData {
	title: string
	services: Service[]
}

export interface Service {
	title: string
	icon: string
	description: string[]
}

export interface AdventajesData {
	title: string
	adventajes: Adventaje[]
}

export interface Adventaje {
	title: string
	description: string
	img: string
	imageAlt: string
	checks: string[]
}

export interface FooterData {
	logo: string
	description: string
	links: Link[]
	socials: Social[]
}

export interface Link {
	label: string
	href: string
}

export interface Social {
	icon: string
	href: string
}

export interface DiscipleshipData {
	title: string
	description: string
	img: string
	imageAlt: string
	href: string
}

export interface Brand {
	label: string
	icon: string
	href: string
}

export interface Meta {
	title: string
	description: string
	lang: string
	charset: string
	ldJson: LdJson
}

export interface LdJson {
	"@context": string
	"@type": string
	"name": string
	"description": string
	"url": string
	"logo": string
	"contactPoint": {
		"@type": string
		"email": string
		"contactType": string
	}
	"sameAs": string[]
}

export type Icon =
	| "DevIcon"
	| "FileIcon"
	| "PlanetIcon"
	| "ConfigIcon"
	| "CheckIcon"
	| "InstagramIcon"
	| "GithubIcon"
	| "TwitterIcon"
	| "FacebookIcon"

export interface CarouselData {
	image: string
	title: string
	description: string
}

export interface ButtonAction {
	href: string
}

export interface LocationData {
	title: string
	description: string
	address: string
	phone: string
}

export interface servicesHours {
	day: string
	hours: string[]
}
export interface ServicesHoursData {
	title: string
	servicesHours: servicesHours[]
}
