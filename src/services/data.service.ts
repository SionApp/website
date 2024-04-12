import type { LandingPageData } from "@/config/landing.interface"
import landingData from "@/data/landing.json"
import eventsData from "@/data/events.json"

// eslint-disable-next-line @typescript-eslint/require-await
export const getLandingData = async (): Promise<LandingPageData> => {
	const data: LandingPageData = landingData
	return data
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getEventsData = async () => {
	return eventsData
}
