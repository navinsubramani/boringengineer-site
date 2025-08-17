---
slug: labview-g-interfaces-solving-a-decade-old-problem
title: LabVIEW G Interfaces solving a decade old problem
authors: navinsubramani
tags: [LabVIEW, Software Engineering]
---

LabVIEW G Interfaces is a new feature introduced in LabVIEW 2020. It is a decade-old problem that has been solved by NI with this feature. This blog post will explain the problem and how G Interfaces solve it.

<!-- truncate -->

### Before G Interfaces

Let us take a common scenario across any industries - Hardware Abstraction Layer. Hardware Abstraction is used to develop test programs that are agnostic of hardware. A simple example is, you wanted to write a test that sets the voltage to the system and measures back current. Now to do this, you would be using Supply (Configure Voltage) and DMM (Measure Current)

You have two supplies - NI 4110 and Keithley 363x, two DMMs - NI DMM and Agilent 3458. The requirement is to use any combination of supplies and DMM to make your test. As there are 4 combinations here for this simple use case, you don't want to write 4 tests, instead, you can write one test program that is capable of letting you use any combination of hardware. This is where the Hardware Abstraction Layer is used.

Using LVOOP, we can build a HAL (Hardware Abstraction Layer) and write programs by abstracting the hardware model and so swapping between hardware models is easy in the future without modifying the test program.

<AssetImg path="/media/uploads/2020/05/HAL-before-G-interfaces-1024x299.png" alt="HAL before G Interfaces" />

<AssetImg path="/media/uploads/2020/05/image-2.png" alt="Abstracting Supplies and DMM" />

As you can see from the above image, LVOOP is used to create a Supply and DMM parents from which models are inherited and methods are overridden. This lets programmers use parent class APIs to program and use the model children during run time based on what hardware models to be used.

### Problem Statement

This works when all the hardware vendor makes hardware with standard configuration and capabilities. But in the real-world, hardwares are much complicated and varies in capabilities with different manufacturers. This makes the software programming complex and harder as well.

Let us take SMU (Source and Measurement Unit) for an example. This type of hardware can do both sourcing and measuring (Supply and DMM). Let us add this to the above scenario, where you have to use SMU for sourcing or measuring or both along with other supplies and DMM.

**How can we abstract this using Inheritance?**

If NI SMU is inherited from supply then it cannot have DMM functionality and cannot be used to replace other DMM models in the test program

<AssetImg path="/media/uploads/2020/05/image-1024x343.png" alt="image-1024x343" />

<AssetImg path="/media/uploads/2020/05/image-6.png" alt="image-6" />

If NI SMU is inherited from DMM then it cannot have Supply functionality and cannot be used to replace other supply models in the test program

<AssetImg path="/media/uploads/2020/05/image-1-1024x332.png" alt="image-1-1024x332" />

We shouldn't add more functions to the DMM class just to support SMU child. This will break the purpose of abstraction and still not let the SMU replace the supplies.

<AssetImg path="/media/uploads/2020/05/image-3-1024x394.png" alt="image-3-1024x394" />

Creating a new type of Instrument will also be not helpful

<AssetImg path="/media/uploads/2020/05/image-14-1024x367.png" alt="image-14-1024x367" />

What comes closer to solving the problem is to split the capability of the SMU into sourcing and measuring, and inherit from the corresponding parent. But this has a drawback in maintaining the code, maintaining the sessions, creating two instances of the same instrument across different types, etc

<AssetImg path="/media/uploads/2020/05/image-5-1024x319.png" alt="image-5-1024x319" />

### LabVIEW G Interfaces to the rescue

NI has introduced G Interfaces from its 2020 edition. The interface is a class without private data cluster, and let any class inherit to multiple interface classes.

So, just treat Interface as a 'normal class' and for this example create the parent hardware class with interface class type.

<AssetImg path="/media/uploads/2020/05/image-7.png" alt="Create a Interface class just like normal class type" />

<AssetImg path="/media/uploads/2020/05/image-11.png" alt="Creating Interface class" />

<AssetImg path="/media/uploads/2020/05/image-8-1024x275.png" alt="Parent is created as an Interface class" />

Now SMU, which is a combination of Supply and DMM, can be inherited from both Supply and DMM interface classes. This is multiple inheritance (inheriting from two parents), letting developers define an entity that shares behavior with two different classes.

<AssetImg path="/media/uploads/2020/05/image-15.png" alt="image-15" />

<AssetImg path="/media/uploads/2020/05/image-12-1024x462.png" alt="Multiple Inheritance of SMU class" />

So now, developers can use the Interface class methods to develop the test programs but then use any combinations of supply, DMM, or SMU model objects to execute the test programs. This gives more flexibility to the test programs and not worry about the kind of instrumentation that manufacturers will be developing in the future.

<AssetImg path="/media/uploads/2020/05/image-13-1024x255.png" alt="LabVIEW code developed using the Interface parent class" />

**Problem solved!!!!**

Notes:

- Interface classes can be inherited from LabVIEW object or other Interface classes
- All the methods of the Interface class must be overridden
- A class can be inherited from one normal class and many interface class

I will not take away the fun anymore and so let you enjoy learning more by yourself!!!
