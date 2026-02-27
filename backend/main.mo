import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    service : Text;
    dateTime : Text;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, service : Text, dateTime : Text) : async () {
    if (name.isEmpty() or phone.isEmpty() or email.isEmpty() or service.isEmpty() or dateTime.isEmpty()) {
      Runtime.trap("All fields must be filled out");
    };

    let inquiry : Inquiry = {
      name;
      phone;
      email;
      service;
      dateTime;
    };

    inquiries.add(inquiry);
  };
};
