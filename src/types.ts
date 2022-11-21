export interface IRoutine {
  exercises: Array<IRoutineExercise>
  lastFinished: string
  name: string
  id: string
}

export interface IRoutineExercise {
  exercise: IExercise
  weight: number
  sets: number
  reps: number
}

export interface IExercise {
  name: string
  url: string
  image: string
}
