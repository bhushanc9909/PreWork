public with sharing class FellowList {
    @AuraEnabled(cacheable=true)
    public static List<Volunteer_Opportunity__c> getList(){
       return [Select id, Name, Email_ID__c , Status__c, Subject__c ,Volunteer_Name__c, Volunteer_Email__c from Volunteer_Opportunity__c];
    }
    
}
