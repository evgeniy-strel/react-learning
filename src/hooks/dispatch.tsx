import { useCallback, useReducer } from "react";

enum PERSON_ACTIONS {
   setName = "setName",
   setAge = "setAge",
   setCity = "setCity",
}

const DEFAULT_PERSON_STATE = {
   name: "",
   age: null,
   city: "",
};

const personReducer = (state: any, action: any) => {
   switch (action.type) {
      case PERSON_ACTIONS.setName: {
         return { ...DEFAULT_PERSON_STATE, name: action.payload };
      }
      case PERSON_ACTIONS.setAge: {
         return { ...state, age: action.payload };
      }
      case PERSON_ACTIONS.setCity: {
         return { ...state, city: action.payload };
      }
      default: {
         return state;
      }
   }
};

export function DispatchView(props: any): JSX.Element {
   const [person, personDispatch] = useReducer(personReducer, DEFAULT_PERSON_STATE);

   const onChangeName = useCallback((event: any) => {
      personDispatch({ type: PERSON_ACTIONS.setName, payload: event.target.value });
   }, []);
   const onChangeAge = useCallback((event: any) => {
      personDispatch({ type: PERSON_ACTIONS.setAge, payload: +event.target.value });
   }, []);
   const onChangeCity = useCallback((event: any) => {
      personDispatch({ type: PERSON_ACTIONS.setCity, payload: event.target.value });
   }, []);

   return (
      <div>
         <div>
            Зовут {person.name}, мне {person.age} лет, я из города {person.city}
         </div>
         <input value={person.name} onChange={onChangeName} placeholder="Имя" />
         <input value={person.age} onChange={onChangeAge} placeholder="Возраст" />
         <input value={person.city} onChange={onChangeCity} placeholder="Город" />
      </div>
   );
}
