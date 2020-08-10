import React,{useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';

import {useHistory} from 'react-router-dom';
import warningIcon from '../../assets/images/icons/warning.svg';

import './style.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
function TeacherForm(){
    const history = useHistory();
    
    const [name,setName] = useState('');
    const [avatar,setAvatar] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [bio,setBio] = useState('');

    const [subject,setSubject] = useState('');
    const [cost,setCost] = useState('');


    const [scheduleitems,setscheduleitems] = useState([
        
        { week_day: 0,from:'', to:''}
    ]);
    function setscheduleitemsValue(position:number,field:string , value:string){
        const updateScheduleItems =scheduleitems.map((scheduleitem,index)=>{
            if(index === position){
                return {...scheduleitem,[field]:value};
            }
            return scheduleitem;
        });
        setscheduleitems(updateScheduleItems);

    }
    function handleCreateClass(e:FormEvent){
        e.preventDefault();
     
        console.log(scheduleitems);
        api.post('/classes',{
            name,
            avatar,
            whatsapp,
            bio,
            cost:Number(cost),
            subject,
            schedule:scheduleitems
        }).then(()=>{
            alert('cadastro realizado com sucesso');
            history.push('/');
        }).catch(()=>{
            
            alert('erro no cadastro');
        })
        
        
    }

    function addnewScheduleItem(){
        setscheduleitems([
            ...scheduleitems,
            { week_day: 0,from:'', to:''}
        ]);
        
    }
    return(
        <div className="container" id="page-teacher-form">
            
             <PageHeader title="Que incrível que você quer dar aula">
                 <p id="descricao">O primeiro passo é preencher,esse formulário de inscrição</p>
             </PageHeader>

             <main>
                 <form onSubmit={ handleCreateClass}>
                 <fieldset>
                     <legend>Seus dados</legend>
                  
                     <Input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} label="Nome completo"></Input>
                     <Input type="" name="avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}} label="Avatar"></Input>
                     <Input type="" name="whatsapp" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}} label="Whatsapp"></Input>
                     <Textarea name="bio" label="Biografia" value={bio} onChange={(e)=>{setBio(e.target.value)}}></Textarea>
                  
                 </fieldset>
                 <fieldset>
                     <legend>Sobre aula</legend>
                     <Select value={subject} onChange={(e)=>{setSubject(e.target.value)}} name="subject" label="Matéria"
                     options={[
                            {value:'História',label:'História'},
                            {value:'português',label:'português'},
                            {value:'Geografia',label:'Geografia'},
                            {value:'Português',label:'Português'},
                            {value:'Matemática',label:'Matemática'},
                            {value:'Química',label:'Química'},
                            {value:'Filosofia',label:'Filosofia'},
                            {value:'Sociologia',label:'Sociologia'},
                     
                     ]}
                     />
                     <Input value={cost} onChange={(e)=>{setCost(e.target.value)}} type="" name="cost" label="Custo da sua hora por aula"></Input>
                     
                  
                 </fieldset>
                 
                 <fieldset>
                     <legend>
                         Horários disponíveis
                        <button onClick={addnewScheduleItem} type="button">
                            + Novo horário
                        </button>
                     </legend>
                     {
                         scheduleitems.map((scheduleItem,index)=>{
                             return(
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select name="week_day"
                                    label="Dia da semana"
                                    onChange={e=>setscheduleitemsValue(index, 'week_day',e.target.value)}
                                    value={scheduleItem.week_day}
                                    options={[
                                            {value:'0',label:'Domingo'},
                                            {value:'1',label:'Segunda'},
                                            {value:'2',label:'Terça'},
                                            {value:'3',label:'Quarta'},
                                            {value:'4',label:'Quinta'},
                                            {value:'5',label:'Sexta'},
                                            {value:'6',label:'Sábado'},
                                    ]}
                                    />
                                        <Input type="time"onChange={e=>setscheduleitemsValue(index, 'from',e.target.value)} value={scheduleItem.from} name="from" label="Das"></Input>
                                        <Input type="time"onChange={e=>setscheduleitemsValue(index, 'to',e.target.value)} value={scheduleItem.to}  name="to" label="até"></Input>
                                </div>
                             );
                         })
                     }
                   
                  
                 </fieldset>
               
                 <footer>
                     <p>
                        <img src={warningIcon} alt="Aviso Importante"/>


                        <b id="import">Importante!<br/>
                        Preencha todos os dados</b>
                        <button type="submit">Salvar cadastro</button>
                        
                     </p>
                 </footer>
                 </form>
             </main>
        </div>
    )
    
}
export default TeacherForm;