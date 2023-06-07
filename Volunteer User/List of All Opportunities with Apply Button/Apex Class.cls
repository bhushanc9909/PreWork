public with sharing class fellowinfo {
    @AuraEnabled(cacheable=true)
    public static List<Volunteer_Opportunity__c> felinfo(){
        return[Select id, Name, School_Name__c, City__c, Classroom_ID__c, Subject__c from Volunteer_Opportunity__c];
    }
}
