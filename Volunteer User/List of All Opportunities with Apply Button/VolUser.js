import { LightningElement, track, wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import felinfo from '@salesforce/apex/fellowinfo.felinfo';
export default class V1 extends NavigationMixin(LightningElement) {
    @track opportunities;
    
    @track columns = [
        {label: 'Name', fieldName : 'Name', type : 'text'},
        {label: 'City', fieldName : 'City__c', type : 'text'},
        {label: 'School Name', fieldName : 'School_Name__c', type : 'text'},
        {label: 'Classroom ID', fieldName : 'Classroom_ID__c', type : 'text'},
        {label: 'Subject', fieldName : 'Subject__c', type : 'text'},
        {
            label: 'Apply',
            type: 'button',
            typeAttributes: {
                label: 'Apply',
                variant: 'brand',
                name: 'apply',
                title: 'Apply',
                disabled: false,
            },
        },
    ];
    @wire(felinfo) wiredfellow({data, error}){
        if(data){
            this.opportunities = data;
            console.log(data);
        }else if(error){
            console.log(error);
        }
    }
    handleRowAction(event) {
        const recordId = event.detail.row.Id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                objectApiName: 'Volunteer_Opportunity__c',
                actionName: 'edit',
                layoutType: 'Layout for Volunteer',
            },
        });
    }
 
}
