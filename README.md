# typescript-data-generator
Data generator decorator based for Typescript classes

Allow to use decorator to generate data

```
export class Owner{
    @Fake(faker.name.firstName)
    firstName!: string;
    @Fake((context)=>"Stephen"))
    lastName!: string;
    @Generate()((context:any,scope:any)=>get(scope)(new Car(),context))
    car!: Car;
}
```

See test file for more examples
