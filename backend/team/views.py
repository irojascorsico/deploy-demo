from rest_framework.response import Response
from rest_framework.views import APIView as ApiView

from .serializers import TeamSerializer
from .models import Team

# Create your views here.
class TeamView(ApiView):

    def get(self, request):
        team_members = Team.objects.all()
        serializer = TeamSerializer(team_members, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TeamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)