import { create } from "zustand"

export interface StatisticsState {
    inDietPercentage: number,
    bestSequence: number,
    recordedMeals: number,
    inDietMeals: number,
    outsideDietMeals: number
}

export const useStatisticsStore = create<StatisticsState>((set, get) => {
    return {
        inDietPercentage: 90.86,
        bestSequence: 22,
        recordedMeals: 109,
        inDietMeals: 80,
        outsideDietMeals: 29
    }
})
