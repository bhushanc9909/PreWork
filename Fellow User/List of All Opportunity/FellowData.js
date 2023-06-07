import { LightningElement ,wire, track} from 'lwc';
import getList from '@salesforce/apex/FellowList.getList';
export default class FellowData extends LightningElement {
    @track fellowList;
    @wire(getList) wiredfellow({data, error}){
        if(data){
            this.fellowList = data;
            console.log(data);
        }else if(error){
            console.log(error);
        }
    }
    @track Columns = [
        {label: 'Name', fieldName : 'Name'},
        {label: 'Email ID', fieldName : 'Email_ID__c'},
        {label: 'Subject', fieldName : 'Subject__c'},
        {label: 'Status', fieldName : 'Status__c'},
        {label: 'Volunteer Name', fieldName : 'Volunteer_Name__c'},
        {label: 'Voluteer Email', fieldName : 'Volunteer_Email__c'}
    ];
}
