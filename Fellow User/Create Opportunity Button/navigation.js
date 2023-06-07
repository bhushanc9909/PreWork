import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class Navigation extends NavigationMixin(LightningElement) {
    navigateToNewOppPage(event){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Volunteer_Opportunity__c',
                actionName : 'new'
            },
        });
    }
}
