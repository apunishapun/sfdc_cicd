@isTest
private class SFCICD_SampleTest {
    @IsTest
    static void sum(){
        System.assertEquals(2, SFCICD_Sample.add(1, 1), 'Should added num1 and num2');
    }
}
